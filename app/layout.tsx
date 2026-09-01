import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Jean Pool Arias — Full Stack Developer',
  description: 'Portfolio of Jean Pool Arias, a full stack developer focused on robust backend architecture, modern frontend systems, and cloud-native delivery.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider><SiteHeader />{children}</ThemeProvider></body></html>
}
