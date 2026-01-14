import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const revalidate = 3600 // Cache for 1 hour

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'data', 'metrics.json')
    const fileContents = await readFile(filePath, 'utf8')
    const metricsData = JSON.parse(fileContents)

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
