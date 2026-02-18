import type { Metadata } from 'next'
import PublicationsSection from '@/components/PublicationsSection'

export const metadata: Metadata = {
  title: 'Publications - Adam L Patterson',
  description: 'Full list of academic publications by Adam L Patterson.',
}

export default function PublicationsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl min-h-screen">
      <PublicationsSection />
    </main>
  )
}
