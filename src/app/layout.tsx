import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Newkriti Gautam — Business & Finance Graduate',
  description: 'Finance and business professional with hands-on experience and drives measurable business outcomes. MBA Candidate at Amity Business School.',
  keywords: ['AI Finance', 'MBA', 'Financial Analyst', 'Business Intelligence', 'Amity University'],
  openGraph: {
    title: 'Newkriti Gautam — Business & Finance Graduate',
    description: 'MBA Candidate with experience in finance, audit, client management, and business strategy.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-text font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
