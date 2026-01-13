'use client'

import Image from 'next/image'
import { useState } from 'react'
import { PROFILE_DATA, RESUME_PATH, SCHOLAR_URL, LINKEDIN_URL } from '@/lib/constants'

export default function ProfileHeader() {
  const [imgError, setImgError] = useState(false)

  return (
    <header className="profile-header mb-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="profile-image w-32 h-32 flex-shrink-0">
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            {!imgError ? (
              <Image
                src="/profile.jpg"
                alt={PROFILE_DATA.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
                onError={() => setImgError(true)}
              />
            ) : (
              <svg
                className="w-16 h-16 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M6 21C6 17.134 8.686 14 12 14C15.314 14 18 17.134 18 21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </div>

        <div className="profile-info text-center md:text-left flex-1">
          <h1 className="font-merriweather text-4xl font-bold mb-2">
            {PROFILE_DATA.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{PROFILE_DATA.title}</p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
              CV (PDF)
            </a>

            <a
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
              </svg>
              Google Scholar
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
