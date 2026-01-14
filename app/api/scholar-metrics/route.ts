import { NextResponse } from 'next/server'
import metricsData from '@/data/metrics.json'

export const revalidate = 3600 // Cache for 1 hour

export async function GET() {
  try {
    return NextResponse.json(metricsData, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
      }
    })
  } catch (error) {
    console.error('Failed to load metrics:', error)

    return NextResponse.json(
      {
        error: 'Failed to fetch metrics',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
