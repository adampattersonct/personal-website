import { Suspense } from 'react'
import Image from 'next/image'
import MetricsDisplay from '@/components/MetricsDisplay'
import PublicationsSection from '@/components/PublicationsSection'
import { PROFILE_DATA, SCHOLAR_URL, LINKEDIN_URL, GITHUB_URL } from '@/lib/constants'

function MetricsLoadingSkeleton() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Research Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="metric-card animate-pulse">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 mx-auto"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="w-40 h-52 flex-shrink-0">
          <div className="w-full h-full rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-lg">
            <Image
              src="/profile.jpg"
              alt={PROFILE_DATA.name}
              width={160}
              height={208}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="text-center md:text-left flex-1">
          <h1 className="font-merriweather text-4xl font-bold mb-2">
            {PROFILE_DATA.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-3">
            {PROFILE_DATA.title}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {PROFILE_DATA.tagline}
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Google Scholar"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
              </svg>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:adamlpattersoni@gmail.com"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Suspense fallback={<MetricsLoadingSkeleton />}>
        <MetricsDisplay />
      </Suspense>

      <PublicationsSection limit={3} showViewAll />
    </main>
  )
}
