import type { Metadata } from 'next'
import { presentations } from '@/data/presentations'

export const metadata: Metadata = {
  title: 'Presentations - Adam L Patterson',
  description: 'Conference presentations by Adam L Patterson.',
}

export default function PresentationsPage() {
  const total = presentations.length

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl min-h-screen">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Presentations</h2>
        <ol className="space-y-4">
          {presentations.map((pres, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="font-semibold text-blue-600 dark:text-blue-400 shrink-0 pt-0.5">[{total - index}]</span>
              <div className="pl-4 border-l-2 border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <p className="text-gray-800 dark:text-gray-200">
                {pres.authors} ({pres.year}).{' '}
                {pres.url ? (
                  <a
                    href={pres.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium"
                  >
                    {pres.title}
                  </a>
                ) : (
                  <span className="font-medium">{pres.title}</span>
                )}
                .{' '}
                <span className="italic text-gray-600 dark:text-gray-400">{pres.conference}</span>
                <span className="text-gray-600 dark:text-gray-400">, {pres.location}</span>
                .
              </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}
