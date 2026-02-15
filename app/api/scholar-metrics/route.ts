import { NextResponse } from 'next/server'

export const revalidate = 3600 // Cache for 1 hour

// Static metrics data - update these values manually when they change
const metricsData = {
  citations: 40,
  hIndex: 4,
  i10Index: 2,
<<<<<<< HEAD
  lastUpdated: "2026-02-15T12:00:00.000Z"
=======
  lastUpdated: "2026-02-14T12:00:00.000Z"
>>>>>>> 14a8fbcc78cf676a4963b81067aaa8ddcf4af7b8
}

export async function GET() {
  return NextResponse.json(metricsData, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
    }
  })
}
