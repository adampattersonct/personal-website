import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teaching - Adam L Patterson',
  description: 'Teaching experience and philosophy of Adam L Patterson.',
}

interface Course {
  institution: string
  courses: string[]
}

const teachingHistory: Course[] = [
  {
    institution: 'University of Connecticut',
    courses: ['Undergraduate Macroeconomics'],
  },
  {
    institution: 'Bryant University',
    courses: ['[Placeholder — add course name(s)]'],
  },
  {
    institution: 'Nichols College',
    courses: ['[Placeholder — add course name(s)]'],
  },
]

export default function TeachingPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl min-h-screen">
      <h1 className="font-merriweather text-3xl font-bold mb-8">Teaching</h1>

      {/* Teaching Philosophy */}
      <section className="mb-10">
        <h2 className="font-merriweather text-2xl font-bold mb-4">Teaching Philosophy</h2>
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {/* PLACEHOLDER — Edit to reflect your teaching philosophy */}
            I believe economics becomes most meaningful when students can connect theoretical
            frameworks to the world they observe every day. My courses incorporate real-world data
            visualization, current policy events, and multimedia resources — including CNBC segments
            and Federal Reserve communications — to bridge the gap between textbook models and lived
            economic reality. My goal is for students to leave each class equipped not only with
            analytical tools but with the confidence to apply them independently.
          </p>
        </div>
      </section>

      {/* Courses Taught */}
      <section className="mb-10">
        <h2 className="font-merriweather text-2xl font-bold mb-4">Courses Taught</h2>
        <div className="space-y-6">
          {teachingHistory.map((entry) => (
            <div
              key={entry.institution}
              className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-5"
            >
              <h3 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">
                {entry.institution}
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {entry.courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
