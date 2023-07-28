import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'North Rental',
  description: 'Find and Rent the best car for you. Fast and simple.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
