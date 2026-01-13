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
      // Get all table cells from the metrics table
      const table = document.querySelector('#gsc_rsb_st')
      if (!table) {
        return { citations: 0, hIndex: 0, i10Index: 0 }
      }

      const cells = Array.from(table.querySelectorAll('td')).map(td => td.textContent?.trim() || '0')

      // Table structure: [label, allTime, since2019, label, allTime, since2019, ...]
      // Index 1: Citations (all time), Index 4: h-index (all time), Index 7: i10-index (all time)
      const parseNumber = (str: string) => parseInt(str.replace(/,/g, '')) || 0

      return {
        citations: parseNumber(cells[1] || '0'),
        hIndex: parseNumber(cells[4] || '0'),
        i10Index: parseNumber(cells[7] || '0')
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
