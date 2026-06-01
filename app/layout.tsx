import type { Metadata } from 'next'
import '../styles/globals.css'
export const metadata: Metadata = {
  title: 'Limitless Healthcare AI™ — AI Innovation for Healthcare',
  description: 'AI-powered healthcare workforce solutions, clinical operations, and digital transformation. Built by Leonilla Addeh, RN MSN-Ed.',
  openGraph: { title: 'Limitless Healthcare AI™', description: 'AI Innovation for Healthcare Organizations', url: 'https://limitlesshealthcareai.com', type: 'website' },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
