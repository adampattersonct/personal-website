import { NextResponse } from 'next/server'
import { scrapeScholarMetrics } from '@/lib/scraper'
import { SCHOLAR_URL } from '@/lib/constants'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Cache for 1 hour

export async function GET() {
  try {
    const metrics = await scrapeScholarMetrics(SCHOLAR_URL)

    return NextResponse.json(metrics, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
      }
    })
  } catch (error) {
    console.error('Failed to scrape Google Scholar:', error)

    return NextResponse.json(
      {
        error: 'Failed to fetch metrics',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
