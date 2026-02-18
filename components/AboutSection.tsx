import { PROFILE_DATA } from '@/lib/constants'

export default function AboutSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-center">About</h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 dark:text-gray-300 mb-4">{PROFILE_DATA.bio}</p>
        <p className="text-gray-700 dark:text-gray-300">
          My long-term research interests lie in applied econometrics and the economics of Gen AI. Feel free to reach out via email or LinkedIn.
        </p>
      </div>
    </section>
  )
}
