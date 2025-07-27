import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dao Le Van - Frontend Developer Portfolio',
  description: 'Fresher Frontend Developer with expertise in React, Next.js, and TypeScript. View my projects and get in touch for collaboration opportunities.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Dao Le Van' }],
  creator: 'Dao Le Van',
  publisher: 'Dao Le Van',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Dao Le Van - Frontend Developer Portfolio',
    description: 'Fresher Frontend Developer with expertise in React, Next.js, and TypeScript. View my projects and get in touch for collaboration opportunities.',
    url: 'https://your-portfolio-url.com',
    siteName: 'Dao Le Van Portfolio',
    images: [
      {
        url: '/public/placeholder-user.jpg',
        width: 800,
        height: 600,
        alt: 'Dao Le Van - Frontend Developer',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
