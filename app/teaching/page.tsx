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
    courses: ['ECON 3438: Contemporary Problems in Economics', 'ECON 2447: Economics of Sports', 'ECON 2311Q: Econometrics I', 'ECON 1201: Principles of Microeconomics'],
  },
  {
    institution: 'Bryant University',
    courses: ['Economics 114: Principles of Macroeconomics'],
  },
  {
    institution: 'Nichols College',
    courses: ['Data Science 201: Introduction to Data Science', 'Data Science 101: Data and AI Literacy'],
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
            I believe economics becomes most meaningful when students apply theoretical
            frameworks to the world they observe every day. My courses incorporate real-world data
            visualization, current policy events, and multimedia resources, including CNBC segments
            and Federal Reserve communications, to bridge the gap between textbook models and lived
            economic reality. My goal is for students to leave each class equipped not only with
            analytical tools but with the confidence to apply them independently.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Furthermore, it is my belief that LLMs and Gen AI tools are fundamentally changing in-demand skills for entry level roles.
            My approach to teaching Data Science and Economics is to equip students with the critical thinking skills necessary to adapt to this rapidly evolving landscape.
            I emphasize the importance of understanding underlying economic principles and data science techniques, while also encouraging students to stay curious and continuously learn new tools and technologies as they emerge.
            Domain expertise and communication skills will become prevalent as Gen AI tools commoditize advanced coding and technical skills. These tools should be a powerful complement to their human judgment and creativity, rather than a replacement.
            It is essential for students to validate each step of their analysis using chain of thought prompting, while critically thinking about the assumptions and limitations of the models and tools they are using.
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
