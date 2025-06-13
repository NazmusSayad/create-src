import '@/styles/index.css'
import '@/styles/initial.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={['antialiased'].join(' ')}>{children}</body>
    </html>
  )
}
