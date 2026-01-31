const publications = [
  {
    authors: 'Frydenberg, M., Mentzer, K., Patterson, A.',
    year: 2026,
    title: 'The Rapid Rise of Generative AI Adoption among First-Year College Students',
    journal: 'Information Systems Education Journal',
    volume: '24',
    issue: '1',
    pages: '4-18',
    url: 'https://openurl.ebsco.com/EPDB%3Agcd%3A14%3A25730494/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A185668558&crl=c&link_origin=scholar.google.com',
  },
  {
    authors: 'Patterson, A.',
    year: 2025,
    title: 'Assessing the Alignment of FOMC Statements with Minutes using Large Language Models',
    journal: 'Issues in Information Systems',
    volume: '26',
    issue: '2',
    pages: '96-108',
    url: 'https://iacis.org/iis/2025/2_iis_2025_96-108.pdf',
  },
  {
    authors: 'Zhao, W., Patterson, A., Sentihilkumar C., Wang, Y., Gupta, A., Sadighi, S., Nayyar, N.',
    year: 2025,
    title: 'From Metrics to Meaning: Estimating User Feedback Using LLM-Based Evaluation',
    journal: 'Amazon Science Internal Publication',
    volume: '',
    issue: '',
    pages: '',
    url: '',
  },
  {
    authors: 'Patterson, A., Temple, C., Anderson, N., Rogalski, C., Mentzer, K.',
    year: 2025,
    title: 'The Virtual Stage: Virtual Reality Integration in Effective Speaking Courses',
    journal: 'Information Systems Education Journal',
    volume: '23',
    issue: '4',
    pages: '57-68',
    url: 'https://eric.ed.gov/?id=EJ1468090',
  },
  {
    authors: 'Patterson, A., Frydenberg, M., Basma, L.',
    year: 2024,
    title: 'Examining Generative Artificial Intelligence Adoption in Academia: a UTAUT perspective',
    journal: 'Issues in Information Systems',
    volume: '25',
    issue: '3',
    pages: '238-251',
    url: 'https://iacis.org/iis/2024/3_iis_2024_238-251.pdf',
  },
  {
    authors: 'Patterson, A.',
    year: 2024,
    title: 'Examining Text Consistency amongst FOMC Statements and Minutes Subtext using Deep Learning',
    journal: 'Issues in Information Systems',
    volume: '25',
    issue: '3',
    pages: '252-266',
    url: 'https://iacis.org/iis/2024/3_iis_2024_252-266.pdf',
  },
  {
    authors: 'Rruplli, E., Frydenberg, M., Patterson, A., Mentzer, K.',
    year: 2024,
    title: 'Examining Factors of Student AI Adoption through the Value-based Adoption Model',
    journal: 'Issues in Information Systems',
    volume: '25',
    issue: '3',
    pages: '218-230',
    url: 'https://iacis.org/iis/2024/3_iis_2024_218-230.pdf',
  },
  {
    authors: 'Mentzer, K., Frydenberg, M., & Patterson, A.',
    year: 2024,
    title: 'Are Tech Savvy Students Tech Literate? Digital and Data Literacy Skills of First-Year College Students',
    journal: 'Information Systems Education Journal',
    volume: '22',
    issue: '3',
    pages: '4-24',
    url: 'https://eric.ed.gov/?id=EJ1434504',
  },
  {
    authors: 'Grealis, T., Harmon, O., Patterson, A., & Tomolonis, P.',
    year: 2024,
    title: 'Excel Literacy in the Classroom',
    journal: 'Business Education Innovation Journal',
    volume: '16',
    issue: '2',
    pages: '173-182',
    url: 'https://openurl.ebsco.com/EPDB%3Agcd%3A13%3A27844637/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A182172866&crl=c&link_origin=scholar.google.com',
  },
  {
    authors: 'Patterson, A., Mocarsky, M., Cho, J., Harmon, O., & Calvert, C.',
    year: 2023,
    title: 'Teaching Data Literacy and Sports Economic Fundamentals Using Fantasy Sports',
    journal: 'Business Education Innovation Journal',
    volume: '15',
    issue: '1',
    pages: '51-61',
    url: 'https://openurl.ebsco.com/EPDB%3Agcd%3A9%3A27844537/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A170961393&crl=c&link_origin=scholar.google.com',
  },
]

export default function PublicationsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Publications</h2>
      <ol className="space-y-4">
        {publications.map((pub, index) => (
          <li key={index} className="pl-4 border-l-2 border-blue-200 hover:border-blue-500 transition-colors">
            <p className="text-gray-800">
              {pub.authors} ({pub.year}).{' '}
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
              >
                {pub.title}
              </a>
              .{' '}
              <span className="italic text-gray-600">{pub.journal}</span>
              {pub.volume && <span className="text-gray-600">, {pub.volume}</span>}
              {pub.issue && <span className="text-gray-600">({pub.issue})</span>}
              {pub.pages && <span className="text-gray-600">, {pub.pages}</span>}
              .
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
