'use client'

import { useEffect, useState } from 'react'
import { ScholarMetrics } from '@/lib/types'

export default function MetricsDisplay() {
  const [metrics, setMetrics] = useState<ScholarMetrics | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/scholar-metrics')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch metrics')
        return res.json()
      })
      .then(data => {
        setMetrics(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message || 'Failed to load metrics')
        setLoading(false)
      })
  }, [])

  const formatDate = (isoString: string) => {
    const date = new Date(isoString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Research Metrics</h2>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="metric-card animate-pulse">
              <div className="h-12 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          <p className="font-medium">Error loading metrics</p>
          <p className="text-sm mt-1">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 text-sm underline hover:no-underline"
          >
            Try again
          </button>
        </div>
      )}

      {metrics && !loading && !error && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="metric-card text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {metrics.citations.toLocaleString()}
              </div>
              <div className="text-gray-600 font-medium">Citations</div>
            </div>

            <div className="metric-card text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {metrics.hIndex}
              </div>
              <div className="text-gray-600 font-medium">h-index</div>
            </div>

            <div className="metric-card text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {metrics.i10Index}
              </div>
              <div className="text-gray-600 font-medium">i10-index</div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Data fetched from Google Scholar • Last updated: {formatDate(metrics.lastUpdated)}
          </p>
        </>
      )}
    </section>
  )
}
