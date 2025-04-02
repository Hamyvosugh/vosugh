// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

// Load the Inter font (for general text)
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Load JetBrains Mono (for code snippets)
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Hamy Vosugh | Creative Director',
  description: 'Creative Director specializing in content creation, web development, and marketing automation',
  keywords: 'creative director, content marketing, web development, SEO, automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}