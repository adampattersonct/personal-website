import { PROFILE_DATA } from '@/lib/constants'

export default function AboutSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">{PROFILE_DATA.bio}</p>
        <p className="text-gray-700">
          Please explore my CV, Google Scholar, or LinkedIn above. The best way to contact me is through the linked email address or by sending a message on LinkedIn.
        </p>
      </div>
    </section>
  )
}
