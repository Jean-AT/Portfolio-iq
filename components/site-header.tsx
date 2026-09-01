'use client'

import { useTheme } from '@/components/theme-provider'
import { Asleep, Light } from '@carbon/icons-react'

export function SiteHeader() {
  const { theme, toggleTheme } = useTheme()
  return <button className="theme-toggle" type="button" aria-label={theme === 'g100' ? 'Switch to light theme' : 'Switch to dark theme'} onClick={toggleTheme}>{theme === 'g100' ? <Light size={18} /> : <Asleep size={18} />}</button>
}
