import { NextResponse } from 'next/server'

export const revalidate = 3600 // Cache for 1 hour

// Static metrics data - update these values manually when they change
const metricsData = {
  citations: 36,
  hIndex: 4,
  i10Index: 2,
  lastUpdated: "2026-01-20T12:00:00.000Z"
}

export async function GET() {
  return NextResponse.json(metricsData, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
    }
  })
}
