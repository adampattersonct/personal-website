import { NextResponse } from 'next/server'

export const revalidate = 3600 // Cache for 1 hour

export async function GET() {
  // Static metrics data - update these values as needed
  const metricsData = {
    citations: 36,
    hIndex: 4,
    i10Index: 2,
    lastUpdated: "2026-01-14T06:32:00.000Z"
  }

  return NextResponse.json(metricsData, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
    }
  })
}
