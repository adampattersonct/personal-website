export interface Presentation {
  authors: string
  year: number
  title: string
  conference: string
  location: string
  url?: string
}

export const presentations: Presentation[] = [
  {
    authors: '',
    year: 2025,
    title: 'Discussant; Teaching Economics More Efficiently (and Effectively) with Python',
    conference: 'Southern Economic Association Annual Meeting',
    location: 'Tampa Bay, FL',
    url: '',
  },
  {
    authors: '',
    year: 2025,
    title: 'Assessing the Alignment of FOMC Statements with Minutes using Large Language Models',
    conference: 'IACIS Conference',
    location: 'Virtual',
    url: '',
  }
]
