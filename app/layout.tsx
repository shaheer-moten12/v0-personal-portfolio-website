import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { PageTransition } from '@/components/layout/PageTransition'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Alex Johnson - Full-Stack Developer',
  description: 'Portfolio of Alex Johnson, a full-stack developer specializing in React, Node.js, and modern web technologies.',
  keywords: ['developer', 'portfolio', 'react', 'nextjs', 'typescript', 'web development'],
  authors: [{ name: 'Alex Johnson' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Alex Johnson - Full-Stack Developer',
    description: 'Portfolio of Alex Johnson, a full-stack developer',
    url: 'https://alexjohnson.dev',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgress />
          <SmoothScroll>
            <PageTransition>
              <Navbar />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
            </PageTransition>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
