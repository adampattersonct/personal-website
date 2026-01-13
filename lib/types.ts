export interface ScholarMetrics {
  citations: number
  hIndex: number
  i10Index: number
  lastUpdated: string
}

export interface ProfileLink {
  label: string
  href: string
  icon: React.ReactNode
  target?: string
}
