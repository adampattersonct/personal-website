import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research - Adam L Patterson',
  description: 'Ongoing research projects and working papers by Adam L Patterson.',
}

interface ResearchProject {
  title: string
  description: string
  methodology: string
  status: string
}

const researchProjects: ResearchProject[] = [
  {
    title: "ChatGPT's Impact on Student Digital Literacy",
    description:
      'This study examines how the introduction of ChatGPT has affected student digital literacy outcomes at the undergraduate level, measuring changes in information evaluation, source verification, and critical analysis skills.',
    methodology: 'Interrupted time series analysis',
    status: 'In progress',
  },
  {
    title: 'Data Center Construction Effects on Local Electricity Markets',
    description:
      'Investigates the causal impact of large-scale data center construction on local electricity prices, grid reliability, and energy market dynamics in affected communities.',
    methodology: 'Difference-in-differences',
    status: 'In progress',
  },
  // Add more working papers here as needed
]

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    'In progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800',
    'Under review': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    'Draft available upon request': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800',
  }

  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[status] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700'}`}>
      {status}
    </span>
  )
}

export default function ResearchPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl min-h-screen">
      <h1 className="font-merriweather text-3xl font-bold mb-3">Research</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Ongoing and working papers. For published work, see{' '}
        <a href="/publications" className="text-blue-600 dark:text-blue-400 hover:underline">
          Publications
        </a>.
      </p>

      <div className="space-y-6">
        {researchProjects.map((project) => (
          <article
            key={project.title}
            className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <h2 className="font-merriweather text-xl font-semibold">
                {project.title}
              </h2>
              <StatusBadge status={project.status} />
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
              {project.description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">Methodology:</span> {project.methodology}
            </p>
          </article>
        ))}
      </div>
    </main>
  )
}
