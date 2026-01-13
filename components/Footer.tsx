'use client'

import { useEffect, useState } from 'react'
import { PROFILE_DATA } from '@/lib/constants'

export default function Footer() {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="border-t border-gray-200 pt-8 mt-12">
      <p className="text-center text-gray-600 text-sm">
        &copy; {year || '2026'} {PROFILE_DATA.name}. All rights reserved.
      </p>
    </footer>
  )
}
