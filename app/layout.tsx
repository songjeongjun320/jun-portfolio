import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Jun's Website",
  description: 'Developer & Researcher',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="eng">
      <body className="antialiased">{children}</body>
    </html>
  )
}

