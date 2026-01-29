import { Suspense } from 'react'
import ProfileHeader from '@/components/ProfileHeader'
import MetricsDisplay from '@/components/MetricsDisplay'
import AboutSection from '@/components/AboutSection'
import PublicationsSection from '@/components/PublicationsSection'
import Footer from '@/components/Footer'

function MetricsLoadingSkeleton() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Research Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="metric-card animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl min-h-screen">
      <ProfileHeader />

      <Suspense fallback={<MetricsLoadingSkeleton />}>
        <MetricsDisplay />
      </Suspense>

      <AboutSection />

      <PublicationsSection />

      <Footer />
    </main>
  )
}
