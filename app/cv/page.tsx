import type { Metadata } from 'next'
import { CV_PATH, RESUME_PATH } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'CV - Adam L Patterson',
  description: 'Curriculum Vitae for Adam L Patterson.',
}

export default function CVPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl min-h-screen">
      <h1 className="font-merriweather text-3xl font-bold mb-8">Curriculum Vitae</h1>

      <div className="flex flex-wrap gap-4 mb-10">
        <a
          href={CV_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV (PDF)
        </a>
        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume (PDF)
        </a>
      </div>

      {/* Embedded CV Preview */}
      <section>
        <h2 className="font-merriweather text-2xl font-bold mb-4">Preview</h2>
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 overflow-hidden">
          <iframe
            src={CV_PATH}
            className="w-full h-[800px]"
            title="CV Preview"
          />
        </div>
      </section>
    </main>
  )
}
