const publications = [
  {
    title: 'Assessing the Alignment of FOMC Statements with Minutes using Large Language Models',
    url: 'https://iacis.org/iis/2025/2_iis_2025_96-108.pdf',
  },
  {
    title: 'Examining Generative Artificial Intelligence Adoption in Academia: a UTAUT perspective',
    url: 'https://iacis.org/iis/2024/3_iis_2024_238-251.pdf',
  },
  {
    title: 'The Rapid Rise of Generative AI Adoption among First-Year College Students',
    url: 'https://openurl.ebsco.com/EPDB%3Agcd%3A14%3A25730494/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A185668558&crl=c&link_origin=scholar.google.com',
  },
  {
    title: 'Examining Factors of Student AI Adoption through the Value-based Adoption Model',
    url: 'https://iacis.org/iis/2024/3_iis_2024_218-230.pdf',
  },
  {
    title: 'The Virtual Stage: Virtual Reality Integration in Effective Speaking Courses',
    url: 'https://eric.ed.gov/?id=EJ1468090',
  },
  {
    title: 'Examining Text Consistency amongst FOMC Statements and Minutes Subtext using Deep Learning',
    url: 'https://iacis.org/iis/2024/3_iis_2024_252-266.pdf',
  },
  {
    title: 'Are Tech Savvy Students Tech Literate? Digital and Data Literacy Skills of First-Year College Students',
    url: 'https://eric.ed.gov/?id=EJ1434504',
  },
  {
    title: 'Teaching Data Literacy and Sports Economic Fundamentals Using Fantasy Sports',
    url: 'https://openurl.ebsco.com/EPDB%3Agcd%3A9%3A27844537/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A170961393&crl=c&link_origin=scholar.google.com',
  },
  {
    title: 'Excel Literacy in the Classroom',
    url: 'https://openurl.ebsco.com/EPDB%3Agcd%3A13%3A27844637/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A182172866&crl=c&link_origin=scholar.google.com',
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
