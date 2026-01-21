import { NextResponse } from 'next/server'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

const SCHOLAR_URL = 'https://scholar.google.com/citations?user=30sUYGgAAAAJ&hl=en'

// Fallback data in case scraping fails
const fallbackMetrics = {
  citations: 36,
  hIndex: 4,
  i10Index: 2,
  lastUpdated: "2026-01-14T06:32:00.000Z"
}

async function scrapeScholarMetrics() {
  let browser = null

  try {
    const isLocal = process.env.NODE_ENV === 'development'

    if (isLocal) {
      // Local development - use system Chrome
      const puppeteerFull = await import('puppeteer')
      browser = await puppeteerFull.default.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      })
    } else {
      // Production (Vercel) - use @sparticuz/chromium
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: { width: 1280, height: 720 },
        executablePath: await chromium.executablePath(),
        headless: true,
      })
    }

    const page = await browser.newPage()

    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    )

    await page.goto(SCHOLAR_URL, {
      waitUntil: 'networkidle2',
      timeout: 30000
    })

    // Wait for the metrics table to load
    await page.waitForSelector('#gsc_rsb_st', { timeout: 10000 })

    // Extract metrics from the table
    const metrics = await page.evaluate(() => {
      const table = document.querySelector('#gsc_rsb_st')
      if (!table) return null

      const rows = table.querySelectorAll('tr')
      let citations = 0
      let hIndex = 0
      let i10Index = 0

      rows.forEach(row => {
        const label = row.querySelector('.gsc_rsb_sc1')?.textContent?.toLowerCase() || ''
        const value = row.querySelector('.gsc_rsb_std')?.textContent || '0'

        if (label.includes('citations')) {
          citations = parseInt(value.replace(/,/g, ''), 10) || 0
        } else if (label.includes('h-index')) {
          hIndex = parseInt(value, 10) || 0
        } else if (label.includes('i10-index')) {
          i10Index = parseInt(value, 10) || 0
        }
      })

      return { citations, hIndex, i10Index }
    })

    await browser.close()

    if (metrics) {
      return {
        ...metrics,
        lastUpdated: new Date().toISOString()
      }
    }

    return null
  } catch (error) {
    console.error('Error scraping Google Scholar:', error)
    if (browser) {
      await browser.close()
    }
    return null
  }
}

export async function GET() {
  try {
    const liveMetrics = await scrapeScholarMetrics()

    if (liveMetrics) {
      return NextResponse.json(liveMetrics, {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
        }
      })
    }

    // Return fallback data if scraping fails
    return NextResponse.json(fallbackMetrics, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
      }
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(fallbackMetrics, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
      }
    })
  }
}
