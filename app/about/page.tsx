import Image from 'next/image'
import type { Metadata } from 'next'
import { PROFILE_DATA, LINKEDIN_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About - Adam L Patterson',
  description: 'About Adam L Patterson — Economist, Data Scientist, and Researcher.',
}

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl min-h-screen">
      <h1 className="font-merriweather text-3xl font-bold mb-8">About</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <div className="w-40 h-52 flex-shrink-0 mx-auto md:mx-0">
          <div className="w-full h-full rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-lg">
            <Image
              src="/profile.jpg"
              alt={PROFILE_DATA.name}
              width={160}
              height={208}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="flex-1">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {PROFILE_DATA.bio}
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My long-term research interests lie in applied econometrics and the economics of generative AI.
            Feel free to reach out via{' '}
            <a href="mailto:adamlpattersoni@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">email</a>
            {' '}or{' '}
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>.
          </p>
        </div>
      </div>

      {/* Research Narrative */}
      <section className="mb-10">
        <h2 className="font-merriweather text-2xl font-bold mb-4">Research Narrative</h2>
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {/* PLACEHOLDER — Edit this paragraph to connect your research threads */}
            My research agenda sits at the nexus of AI systems, causal inference, and infrastructure economics.
            At Amazon I develop surrogate models and LLM-based forecasting pipelines on AWS, while at UConn
            I apply quasi-experimental methods to study how generative AI tools reshape educational outcomes.
            A unifying thread across these projects is the question of how rapidly scaling computational
            infrastructure, from data centers to large language models, generates second-order effects on
            local economies, energy markets, and human capital formation. By combining econometric rigor with
            modern machine learning tooling, I aim to produce actionable evidence that informs technology
            policy at the institutional, regional, and federal level.
          </p>
        </div>
      </section>

      {/* Current Roles */}
      <section className="mb-10">
        <h2 className="font-merriweather text-2xl font-bold mb-4">Current Positions</h2>
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-5">
            <h3 className="font-semibold text-lg mb-1">Economist Apprentice</h3>
            <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">Amazon — PXT AMX Applied Science </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Surrogate index models, LLM (chatbot) evaluation, scalable data pipelines on AWS, science models to enhance Amazonian producitvity and effectiveness.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-5">
            <h3 className="font-semibold text-lg mb-1">Research Technician / Graduate Instructor</h3>
            <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">University of Connecticut</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Evaluate the impacts of policy on Higher Education learning outcomes, applied econometrics research, instructing undergradute students.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="font-merriweather text-2xl font-bold mb-4">Education</h2>
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-5">
            <h3 className="font-semibold text-lg mb-1">MS Data Science</h3>
            <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">Central Connecticut State University</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">2025</p>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Coursework:</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Predictive Analytics: Estimation and Clustering, Predictive Analytics: Classification,
                Multivariate Statistics, Text Analytics with Information Retrieval, Text Analytics with Natural Language Processing,
                Advanced Estimation Methods, Introduction to Data Science
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-5">
            <h3 className="font-semibold text-lg mb-1">MS Quantitative Economics</h3>
            <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">University of Connecticut</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">2020</p>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Coursework:</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Machine Learning for Economists, Applied Econometrics I, Applied Econometrics II, Open-Source Programming
                with Python, Programming and Computation with R for Economists, Mathematical Economics, Operations Research,
                Panel Data Econometrics, Consumer Demand Analysis, Microeconomic Theory I (PhD), Advanced Mathematical
                Economics (PhD), Applied Econometrics I (PhD), Doctoral Dissertation Research
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-5">
            <h3 className="font-semibold text-lg mb-1">BA Economics</h3>
            <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">University of Connecticut</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">2019</p>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Coursework:</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Econometrics I, Economic Forecasting, Money and Banking, Financial Accounting, International Finance,
                Public Finance, Statistics I, Statistics II, Mathematical Economics, Operations Research, Economic Growth,
                Economic Development, Healthcare Economics, Applied Linear Algebra, Transitions to Advanced Mathematics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="mb-10">
        <h2 className="font-merriweather text-2xl font-bold mb-4">Research Interests</h2>
        <div className="flex flex-wrap gap-2">
          {[
            'Technology Policy',
            'Causal Inference',
            'AI & Education',
            'Environmental Impacts of Computation',
            'LLM Forecasting',
            'Applied Econometrics',
          ].map((interest) => (
            <span
              key={interest}
              className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-800"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}
