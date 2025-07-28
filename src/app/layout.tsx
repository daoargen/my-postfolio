import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dao Le Van - Full Stack Developer Portfolio',
  description: 'Fresher Full Stack Developer with experience in React, Next.js, Node.js, and more. View my projects and get in touch for collaboration opportunities.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Dao Le Van' }],
  creator: 'Dao Le Van',
  publisher: 'Dao Le Van',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Dao Le Van - Full Stack Developer Portfolio',
    description: 'Fresher Full Stack Developer with experience in React, Next.js, Node.js, and more. View my projects and get in touch for collaboration opportunities.',
    url: 'https://your-portfolio-url.com',
    siteName: 'Dao Le Van Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Dao Le Van - Full Stack Developer',
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
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
