import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Niki Hellmers',
  description: 'Personal Website of Nicholas Hellmers Davalos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta property="og:title" content="Personal Website of Nicholas Hellmers Davalos" />
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
