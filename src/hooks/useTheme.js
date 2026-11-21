import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'

function readPreference() {
  if (typeof window === 'undefined') return null
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === 'dark' || value === 'light' ? value : null
  } catch {
    return null
  }
}

function getSystemDark() {
  return typeof window !== 'undefined' && window.matchMedia(DARK_QUERY).matches
}

export function useTheme() {
  const [preference, setPreference] = useState(readPreference)
  const [systemDark, setSystemDark] = useState(getSystemDark)

  const theme = preference ?? (systemDark ? 'dark' : 'light')
  const isDark = theme === 'dark'

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', isDark ? '#101218' : '#FCF7EA')
  }, [theme, isDark])

  useEffect(() => {
    if (!preference) return
    try {
      window.localStorage.setItem(STORAGE_KEY, preference)
    } catch {
      // localStorage bisa diblokir; tema tetap bekerja selama sesi ini
    }
  }, [preference])

  useEffect(() => {
    const media = window.matchMedia(DARK_QUERY)
    const onChange = (event) => setSystemDark(event.matches)

    if (media.addEventListener) media.addEventListener('change', onChange)
    else media.addListener(onChange)

    return () => {
      if (media.removeEventListener) media.removeEventListener('change', onChange)
      else media.removeListener(onChange)
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setPreference(isDark ? 'light' : 'dark')
  }, [isDark])

  return { theme, isDark, toggleTheme }
}
