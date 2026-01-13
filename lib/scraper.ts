import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { ScholarMetrics } from './types'

puppeteer.use(StealthPlugin())

export async function scrapeScholarMetrics(
  scholarUrl: string
): Promise<ScholarMetrics> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  try {
    const page = await browser.newPage()

    // Set user agent to avoid bot detection
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    )

    await page.goto(scholarUrl, { waitUntil: 'networkidle0', timeout: 30000 })

    // Extract metrics using page.evaluate()
    const metrics = await page.evaluate(() => {
      const getText = (selector: string) => {
        const el = document.querySelector(selector)
        return el?.textContent?.trim() || '0'
      }

      // Google Scholar profile metrics selectors
      return {
        citations: parseInt(getText('#gsc_rsb_st table tr:nth-child(1) td:nth-child(2)').replace(/,/g, '')),
        hIndex: parseInt(getText('#gsc_rsb_st table tr:nth-child(2) td:nth-child(2)')),
        i10Index: parseInt(getText('#gsc_rsb_st table tr:nth-child(3) td:nth-child(2)'))
      }
    })

    return {
      ...metrics,
      lastUpdated: new Date().toISOString()
    }
  } finally {
    await browser.close()
  }
}
