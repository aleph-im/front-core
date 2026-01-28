import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles'
import { themes, ThemeName } from '../themes'
import { CoreTheme } from '../themes/types'

const STORAGE_KEY = 'aleph-theme-preference'

export type ThemeSwitchContextValue = {
  /** The current theme name */
  themeName: ThemeName
  /** The current theme object */
  theme: CoreTheme
  /** Set theme by name */
  setTheme: (name: ThemeName) => void
  /** Toggle between aleph-cloud-light and aleph-cloud-dark */
  toggleDarkMode: () => void
  /** Whether the current theme is a dark theme */
  isDark: boolean
}

const ThemeSwitchContext = createContext<ThemeSwitchContextValue | null>(null)

export type AlephThemeProviderProps = {
  /** Initial theme name. Defaults to 'aleph-cloud-light'. */
  defaultTheme?: ThemeName
  /** Whether to detect and respect prefers-color-scheme. Defaults to true. */
  detectColorScheme?: boolean
  children: React.ReactNode
}

function getStoredTheme(): ThemeName | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && stored in themes) return stored as ThemeName
  } catch {
    // localStorage not available (SSR, privacy mode)
  }
  return null
}

function getSystemPreference(): ThemeName {
  if (typeof window === 'undefined') return 'aleph-cloud-light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'aleph-cloud-dark'
    : 'aleph-cloud-light'
}

const DARK_THEMES: ThemeName[] = ['aleph-cloud-dark', 'aleph']

export function AlephThemeProvider({
  defaultTheme = 'aleph-cloud-light',
  detectColorScheme = true,
  children,
}: AlephThemeProviderProps) {
  const [themeName, setThemeNameState] = useState<ThemeName>(() => {
    const stored = getStoredTheme()
    if (stored) return stored
    if (detectColorScheme) return getSystemPreference()
    return defaultTheme
  })

  const setTheme = useCallback((name: ThemeName) => {
    setThemeNameState(name)
    try {
      localStorage.setItem(STORAGE_KEY, name)
    } catch {
      // localStorage not available
    }
  }, [])

  const toggleDarkMode = useCallback(() => {
    setTheme(
      themeName === 'aleph-cloud-dark'
        ? 'aleph-cloud-light'
        : 'aleph-cloud-dark',
    )
  }, [themeName, setTheme])

  const isDark = DARK_THEMES.includes(themeName)

  // Listen for system preference changes (only if no stored preference)
  useEffect(() => {
    if (!detectColorScheme) return
    if (getStoredTheme()) return // User already chose, don't override

    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      setThemeNameState(e.matches ? 'aleph-cloud-dark' : 'aleph-cloud-light')
    }
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [detectColorScheme])

  const theme = themes[themeName]

  const value = useMemo<ThemeSwitchContextValue>(
    () => ({
      themeName,
      theme,
      setTheme,
      toggleDarkMode,
      isDark,
    }),
    [themeName, theme, setTheme, toggleDarkMode, isDark],
  )

  return (
    <ThemeSwitchContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeSwitchContext.Provider>
  )
}

/**
 * Hook to access theme switching controls.
 * Must be used within an AlephThemeProvider.
 *
 * Returns: { themeName, theme, setTheme, toggleDarkMode, isDark }
 */
export function useThemeSwitch(): ThemeSwitchContextValue {
  const ctx = useContext(ThemeSwitchContext)
  if (!ctx) {
    throw new Error('useThemeSwitch must be used within an <AlephThemeProvider>')
  }
  return ctx
}
