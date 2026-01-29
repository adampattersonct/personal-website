const publications = [
  {
    title: 'Assessing the Alignment of FOMC Statements with Minutes using Large Language Models',
    url: 'https://iacis.org/iis/2025/2_iis_2025_96-108.pdf',
  },
  {
    title: 'Examining generative artificial intelligence adoption in academia: a UTAUT perspective',
    url: 'https://iacis.org/iis/2024/3_iis_2024_238-251.pdf',
  },
]

export default function PublicationsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Publications</h2>
      <ul className="list-disc list-inside space-y-2">
        {publications.map((pub, index) => (
          <li key={index} className="text-gray-700">
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {pub.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
