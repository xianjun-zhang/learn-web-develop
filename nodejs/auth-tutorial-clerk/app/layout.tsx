import {
  ClerkProvider
} from '@clerk/nextjs'
import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import SignInButtonsFlex from '@/app/_components/SignInButtonsFlex'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="fixed top-4 right-4 z-50">
            <SignInButtonsFlex />
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}