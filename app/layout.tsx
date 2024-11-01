import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CryptoClashApp from './components/Layout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CryptoClash',
  description: 'Crypto Trading Arena',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CryptoClashApp>{children}</CryptoClashApp>
      </body>
    </html>
  )
}
