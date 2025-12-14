import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lumo - Join the Waitlist',
  description: 'Join the Lumo waitlist to be among the first to experience our product',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
