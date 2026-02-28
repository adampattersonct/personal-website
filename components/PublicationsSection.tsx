import Link from 'next/link'
import { publications } from '@/data/publications'

interface Props {
  limit?: number
  showViewAll?: boolean
}

export default function PublicationsSection({ limit, showViewAll }: Props) {
  const total = publications.length
  const items = limit ? publications.slice(0, limit) : publications

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Publications</h2>
      <ol className="space-y-4">
        {items.map((pub, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="font-semibold text-blue-600 dark:text-blue-400 shrink-0 pt-0.5 min-w-[2.5rem] text-right">[{total - index}]</span>
            <div className="pl-4 border-l-2 border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <p className="text-gray-800 dark:text-gray-200">
              {pub.authors} ({pub.year}).{' '}
              {pub.url ? (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium"
                >
                  {pub.title}
                </a>
              ) : (
                <span className="font-medium">{pub.title}</span>
              )}
              .{' '}
              <span className="italic text-gray-600 dark:text-gray-400">{pub.journal}</span>
              {pub.volume && <span className="text-gray-600 dark:text-gray-400">, {pub.volume}</span>}
              {pub.issue && <span className="text-gray-600 dark:text-gray-400">({pub.issue})</span>}
              {pub.pages && <span className="text-gray-600 dark:text-gray-400">, {pub.pages}</span>}
              .
            </p>
            </div>
          </li>
        ))}
      </ol>
      {showViewAll && (
        <div className="mt-6 text-center">
          <Link
            href="/publications"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium"
          >
            View all publications &rarr;
          </Link>
        </div>
      )}
    </section>
  )
}
