# Multi-Theme Support Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restructure the theme system to support Aleph Cloud Light, Aleph Cloud Dark, and Legacy Aleph themes, with a runtime switching provider.

**Architecture:** Extract shared base from current twentysix theme. Create light/dark variant files that provide only color-dependent values. Add an `AlephThemeProvider` that wraps styled-components `ThemeProvider` with `prefers-color-scheme` detection, localStorage persistence, and a `useThemeSwitch()` hook. Maintain backward compatibility by aliasing old theme names.

**Tech Stack:** React 18, styled-components 5, twin.macro 3, TypeScript, Storybook 7

---

## Important Context

### Theme Name Checks in Code
The codebase uses `theme.name` string checks to conditionally apply visual effects:
- `src/styles/global.tsx:175` — `if (theme.name !== 'aleph') return` gates glow/glass/noise effects
- `src/styles/global.tsx:278` — `if (theme.name !== 'twentysix') return` gates grain effects
- `src/components/_design/utils.ts` — uses `theme.name === 'aleph'` for Storybook display logic
- `src/components/_design/colors.stories.tsx` — conditionally renders effect demos per theme

The new themes must use names that work with these checks:
- `aleph-cloud-light` and `aleph-cloud-dark` — both need the twentysix grain effects (they ARE Aleph Cloud / twentysix)
- `aleph` (legacy) — keeps its glow/glass/noise effects

### File Size Reference
- `twentysix.ts`: 1161 lines (source of truth for Aleph Cloud base + light)
- `aleph.ts`: 966 lines (legacy, moves as-is)

### No Test Infrastructure
The project has no test runner configured (`"test": "echo \"Error: no test specified\""`). All verification will be done via Storybook and TypeScript compilation.

### Shared vs Color-Dependent Sections (twentysix.ts analysis)
**Shared (identical between light/dark):**
- `breakpoint` (lines 42-49)
- `font` (lines 172-191) — URLs, families, sizes
- `typo` (lines 211-306) — all typography definitions (references `font.family`)
- `transition` (lines 308-315)
- `icon` (lines 464-473) — icon sizes only

**Color-dependent (differ between light/dark):**
- `color` (lines 51-88)
- `gradient` (lines 90-164)
- `shadows` (lines 166-170) — local helper, used by form/component tokens
- `storybook` (lines 317-326)
- `form` (lines 328-460) — all form tokens reference `color.*` and `gradient.*`
- `button` + all button variants (lines 477-890) — heavily reference `color.*` and `gradient.*`
- All component tokens (lines 892-1146) — reference `color.*`, `gradient.*`, `shadows.*`

### Key Architectural Decision
Because component/form tokens deeply reference `color` and `gradient` variables at definition time (not via theme accessor functions), they cannot be cleanly split into "shared structure" vs "color overlay". The variant files must define the full `form` and `component` objects.

**What the base file provides:** `font`, `typo`, `breakpoint`, `transition`, `icon`, plus helper values (`defaultFontTypo`, `defaultHeaderFontTypo`, `defaultButton` structure).

**What each variant provides:** `name`, `color`, `gradient`, `shadows`, `storybook`, `form`, `component` (fully defined, using their own color/gradient refs).

---

## Task 1: Create Theme Utilities

**Files:**
- Create: `src/themes/utils.ts`

**Step 1: Create the deepMerge utility and theme name helper type**

```typescript
// src/themes/utils.ts
import { CoreTheme } from './types'

/**
 * Deep merges base theme with variant overrides to produce a complete CoreTheme.
 * Variant values take precedence over base values.
 * Arrays are replaced, not concatenated.
 */
export function composeTheme(
  base: Partial<CoreTheme>,
  variant: Partial<CoreTheme>,
): CoreTheme {
  return deepMerge(base, variant) as CoreTheme
}

function deepMerge<T extends Record<string, any>>(
  target: T,
  source: Partial<T>,
): T {
  const result = { ...target }

  for (const key of Object.keys(source) as Array<keyof T>) {
    const sourceVal = source[key]
    const targetVal = target[key]

    if (
      sourceVal &&
      typeof sourceVal === 'object' &&
      !Array.isArray(sourceVal) &&
      typeof sourceVal !== 'function' &&
      targetVal &&
      typeof targetVal === 'object' &&
      !Array.isArray(targetVal) &&
      typeof targetVal !== 'function'
    ) {
      result[key] = deepMerge(targetVal, sourceVal as any)
    } else {
      result[key] = sourceVal as T[keyof T]
    }
  }

  return result
}

/**
 * Theme family identifier. Used for effect class gating in global.tsx.
 * - 'aleph-cloud' themes get grain effects (same as twentysix)
 * - 'aleph' legacy theme gets glow/glass/noise effects
 */
export type ThemeFamily = 'aleph-cloud' | 'aleph'

export function getThemeFamily(themeName: string): ThemeFamily {
  if (themeName === 'aleph') return 'aleph'
  return 'aleph-cloud'
}
```

**Step 2: Verify TypeScript compiles**

Run: `cd /Users/dio/.claude-worktrees/front-core/intelligent-blackburn && npx tsc --noEmit --pretty 2>&1 | head -20`
Expected: No errors related to `src/themes/utils.ts`

**Step 3: Commit**

```bash
git add src/themes/utils.ts
git commit -m "feat(themes): add deepMerge utility and theme family helpers"
```

---

## Task 2: Create Aleph Cloud Base Theme

**Files:**
- Create: `src/themes/aleph-cloud/base.ts`

This file extracts the shared, color-independent parts from `twentysix.ts`.

**Step 1: Create the base file with shared values**

```typescript
// src/themes/aleph-cloud/base.ts
import { pxToRem } from '../../styles/utils'
import {
  ThemeBreakpoint,
  ThemeFont,
  ThemeIcon,
  ThemeTransition,
  ThemeTypo,
  Typo,
} from '../types'

export const breakpoint: ThemeBreakpoint = {
  '2xl': pxToRem(1400),
  xl: pxToRem(1200),
  lg: pxToRem(992),
  md: pxToRem(768),
  sm: pxToRem(576),
  xs: pxToRem(0),
}

export const font: ThemeFont = {
  urls: [
    'https://use.typekit.net/acb7qvn.css',
    'https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,400;0,700;1,400;1,700&family=Source+Code+Pro:wght@400;700&display=swap',
  ],
  family: {
    head: "'rigid-square', sans-serif",
    body: "'Titillium Web', sans-serif",
    code: "'Source Code Pro', monospace",
  },
  size: {
    '28': pxToRem(28),
    '24': pxToRem(24),
    '18': pxToRem(18),
    '16': pxToRem(16),
    '14': pxToRem(14),
    '12': pxToRem(12),
    '10': pxToRem(10),
  },
}

export const defaultFontTypo: Typo = {
  tag: false,
  family: font.family.body,
  style: 'normal',
  weight: 400,
  lineHeight: 1.6,
  size: pxToRem(16),
}

export const defaultHeaderFontTypo: Typo = {
  tag: true,
  family: font.family.head,
  style: 'italic',
  weight: 800,
  lineHeight: 'normal',
  size: pxToRem(16),
}

export const typo: ThemeTypo = {
  h1: { ...defaultHeaderFontTypo, size: pxToRem(72) },
  h2: { ...defaultHeaderFontTypo, size: pxToRem(64) },
  h3: { ...defaultHeaderFontTypo, size: pxToRem(48) },
  h4: { ...defaultHeaderFontTypo, size: pxToRem(40) },
  h5: { ...defaultHeaderFontTypo, size: pxToRem(36) },
  h6: { ...defaultHeaderFontTypo, size: pxToRem(32) },
  h7: { ...defaultHeaderFontTypo, tag: false, size: pxToRem(24) },
  header: { ...defaultHeaderFontTypo, size: pxToRem(128) },
  logo: {
    ...defaultFontTypo,
    family: font.family.head,
    style: 'normal',
    weight: 900,
    size: pxToRem(34),
    spacing: '-0.05em',
  },
  nav: {
    ...defaultFontTypo,
    tag: true,
    family: font.family.head,
    weight: 700,
    lineHeight: 'normal',
    size: pxToRem(18),
  },
  info: {
    ...defaultFontTypo,
    family: font.family.head,
    style: 'italic',
    weight: 800,
    lineHeight: 'normal',
    size: pxToRem(10),
    transform: 'uppercase',
  },
  body: { ...defaultFontTypo, tag: true },
  body1: { ...defaultFontTypo, style: 'italic' },
  body2: { ...defaultFontTypo, style: 'italic', weight: 700 },
  body3: { ...defaultFontTypo, weight: 700 },
  code: { ...defaultFontTypo, tag: true, family: font.family.code },
  code1: { ...defaultFontTypo, family: font.family.code, weight: 700 },
  table: { ...defaultFontTypo, weight: 700, size: pxToRem(12) },
  form: { ...defaultFontTypo, tag: true },
}

export const transition: ThemeTransition = {
  duration: { slow: 700, normal: 500, fast: 200 },
  timing: 'ease-in-out',
}

export const icon: ThemeIcon = {
  size: {
    '2xl': pxToRem(36),
    xl: pxToRem(24),
    lg: pxToRem(16),
    md: pxToRem(14),
    sm: pxToRem(12),
    xs: pxToRem(8),
  },
}
```

**Step 2: Verify TypeScript compiles**

Run: `cd /Users/dio/.claude-worktrees/front-core/intelligent-blackburn && npx tsc --noEmit --pretty 2>&1 | head -20`
Expected: No errors

**Step 3: Commit**

```bash
git add src/themes/aleph-cloud/base.ts
git commit -m "feat(themes): extract shared Aleph Cloud base theme values"
```

---

## Task 3: Create Aleph Cloud Light Variant

**Files:**
- Create: `src/themes/aleph-cloud/light.ts`

This file contains all color-dependent values extracted from the current `twentysix.ts`. It imports shared values from `base.ts` and composes the full theme.

**Step 1: Create the light variant**

Copy the full contents of `src/themes/twentysix.ts` into `src/themes/aleph-cloud/light.ts` with these modifications:

1. Change imports: add imports from `./base` for shared values (`breakpoint`, `font`, `typo`, `transition`, `icon`, `defaultFontTypo`, `defaultHeaderFontTypo`)
2. Remove the local definitions of those shared values (they come from base now)
3. Change `theme.name` from `'twentysix'` to `'aleph-cloud-light'`
4. Keep all color-dependent sections: `color`, `gradient`, `shadows`, `storybook`, `form`, all button variants, all component tokens
5. Import path for `pxToRem` changes to `'../../styles/utils'`
6. Import path for `getGlassEffectCss` changes to `'../../styles'`

The file should assemble the final theme as:

```typescript
import { DefaultTheme } from 'styled-components'
import { breakpoint, font, typo, transition, icon } from './base'
// ... all other imports and color-dependent definitions ...

const theme: DefaultTheme = {
  name: 'aleph-cloud-light',
  color,
  font,
  typo,
  form,
  gradient,
  component,
  transition,
  breakpoint,
  storybook,
}

export default theme
```

**Important:** This is a careful extraction. The file should produce an identical theme object to the current `twentysix.ts`, except for the `name` field. All local variables that reference `color.*` or `gradient.*` stay in this file.

**Step 2: Verify TypeScript compiles**

Run: `cd /Users/dio/.claude-worktrees/front-core/intelligent-blackburn && npx tsc --noEmit --pretty 2>&1 | head -20`
Expected: No errors

**Step 3: Commit**

```bash
git add src/themes/aleph-cloud/light.ts
git commit -m "feat(themes): create Aleph Cloud light variant from twentysix theme"
```

---

## Task 4: Create Aleph Cloud Dark Variant (Placeholder)

**Files:**
- Create: `src/themes/aleph-cloud/dark.ts`

This file has the same structure as `light.ts` but with placeholder dark color values. For now, invert the basic palette (dark backgrounds, light text) while keeping the same brand accent colors. These values will be refined by the design team later.

**Step 1: Create the dark variant**

Copy `light.ts` to `dark.ts` and make these changes:

1. Change `name` to `'aleph-cloud-dark'`
2. Invert the core color palette:
   - `background`: `'#141421'` (was `'#F9F4FF'`)
   - `contentBackground`: `'#141421'`
   - `foreground`: `'#1F1F31'`
   - `text`: `'#FFFFFF'` (was `'#141421'`)
   - `base0`: `'#1F1F31'` (was `'#FFFFFF'`)
   - `base1`: `'#141421'` (was `'#F9F4FF'`)
   - `base2`: `'#FFFFFF'` (was `'#141421'`)
   - `translucid`: `'#FFFFFF0F'`
   - Keep accent colors (`main0`, `main1`, status colors) the same
   - Add dark-specific neutrals:
     - `purple0` through `purple4`: darker variants (e.g., `'#2A1A4E'`, `'#3B2566'`, `'#4C3080'`, `'#5D3B99'`, `'#6E46B3'`)
     - `dark0` through `dark3`: adjust for dark context
     - `light0`, `light1`: adjust for dark context
3. Update `shadows` to use lighter/more visible shadows for dark backgrounds
4. Update `storybook` colors accordingly
5. Update form tokens, button variants, and component tokens to use the dark `color` values
6. Special attention: any hardcoded hex colors in component tokens (like `'#FAF6FF'`, `'#EBDAFF'`, `'#FFFFFF05'`) need dark equivalents

**Note:** This is explicitly a placeholder. Mark unclear color choices with `// TODO: design review` comments. The goal is a functional dark theme, not a polished one.

**Step 2: Verify TypeScript compiles**

Run: `cd /Users/dio/.claude-worktrees/front-core/intelligent-blackburn && npx tsc --noEmit --pretty 2>&1 | head -20`
Expected: No errors

**Step 3: Verify in Storybook (manual)**

Run: `cd /Users/dio/.claude-worktrees/front-core/intelligent-blackburn && npm run storybook`
Switch to "Aleph Cloud Dark" in the toolbar. Verify components render without errors. Colors will look rough — that's expected.

**Step 4: Commit**

```bash
git add src/themes/aleph-cloud/dark.ts
git commit -m "feat(themes): add placeholder Aleph Cloud dark variant"
```

---

## Task 5: Create Aleph Cloud Theme Index

**Files:**
- Create: `src/themes/aleph-cloud/index.ts`

**Step 1: Create the barrel export**

```typescript
// src/themes/aleph-cloud/index.ts
export { default as alephCloudLight } from './light'
export { default as alephCloudDark } from './dark'
```

**Step 2: Commit**

```bash
git add src/themes/aleph-cloud/index.ts
git commit -m "feat(themes): add aleph-cloud theme barrel export"
```

---

## Task 6: Move Legacy Aleph Theme

**Files:**
- Create: `src/themes/legacy/aleph.ts` (copy of current `src/themes/aleph.ts`)
- Create: `src/themes/legacy/index.ts`

**Step 1: Copy the legacy theme**

Copy `src/themes/aleph.ts` to `src/themes/legacy/aleph.ts`. Adjust import paths:
- `'../styles/utils'` becomes `'../../styles/utils'`
- `'../styles'` becomes `'../../styles'`

Do NOT modify the original `src/themes/aleph.ts` yet — it stays for backward compatibility until Task 7.

**Step 2: Create barrel export**

```typescript
// src/themes/legacy/index.ts
export { default as legacyAleph } from './aleph'
```

**Step 3: Verify TypeScript compiles**

Run: `cd /Users/dio/.claude-worktrees/front-core/intelligent-blackburn && npx tsc --noEmit --pretty 2>&1 | head -20`
Expected: No errors

**Step 4: Commit**

```bash
git add src/themes/legacy/
git commit -m "feat(themes): add legacy aleph theme in new directory structure"
```

---

## Task 7: Update Theme Index with Backward Compatibility

**Files:**
- Modify: `src/themes/index.ts`

**Step 1: Update the theme index**

```typescript
// src/themes/index.ts
import { alephCloudLight, alephCloudDark } from './aleph-cloud'
import { legacyAleph } from './legacy'

// --- New theme exports ---
export { alephCloudLight, alephCloudDark, legacyAleph }
export { alephCloudLight, alephCloudDark } from './aleph-cloud'
export { legacyAleph } from './legacy'

export const themes = {
  'aleph-cloud-light': alephCloudLight,
  'aleph-cloud-dark': alephCloudDark,
  aleph: legacyAleph,

  /** @deprecated Use 'aleph-cloud-light' or themes['aleph-cloud-light']. This alias will be removed in a future version. */
  twentysix: alephCloudLight,
}

export type ThemeName = keyof typeof themes

// @note: sorted list for storybook UI
export const themeList = [alephCloudLight, alephCloudDark, legacyAleph]

export type { CoreTheme, BreakpointId, TypoSizeKind, TypoKind } from './types'
```

**Step 2: Verify backward compatibility**

Ensure `themes.twentysix` still resolves (it's aliased to `alephCloudLight`). Ensure `themes.aleph` still resolves (it's now `legacyAleph`).

**Step 3: Verify TypeScript compiles**

Run: `cd /Users/dio/.claude-worktrees/front-core/intelligent-blackburn && npx tsc --noEmit --pretty 2>&1 | head -20`
Expected: No errors

**Step 4: Commit**

```bash
git add src/themes/index.ts
git commit -m "feat(themes): update theme index with new names and backward-compatible aliases"
```

---

## Task 8: Update Global Styles Effect Gating

**Files:**
- Modify: `src/styles/global.tsx`

The current code gates effects on `theme.name !== 'aleph'` and `theme.name !== 'twentysix'`. The new Aleph Cloud themes (`aleph-cloud-light`, `aleph-cloud-dark`) should get the same effects as `twentysix` (grain effects).

**Step 1: Update the effect gating logic**

Import the helper:
```typescript
import { getThemeFamily } from '../themes/utils'
```

Change `alephEffectClasses`:
```typescript
function alephEffectClasses(theme: DefaultTheme) {
  if (getThemeFamily(theme.name) !== 'aleph') return
  // ... rest unchanged
}
```

Change `twentysixEffectClasses`:
```typescript
function twentysixEffectClasses(theme: DefaultTheme) {
  if (getThemeFamily(theme.name) !== 'aleph-cloud') return
  // ... rest unchanged
}
```

**Step 2: Verify TypeScript compiles**

Run: `cd /Users/dio/.claude-worktrees/front-core/intelligent-blackburn && npx tsc --noEmit --pretty 2>&1 | head -20`
Expected: No errors

**Step 3: Commit**

```bash
git add src/styles/global.tsx src/themes/utils.ts
git commit -m "fix(styles): update effect class gating to support new theme names"
```

---

## Task 9: Create AlephThemeProvider and useThemeSwitch Hook

**Files:**
- Create: `src/contexts/theme.tsx`
- Modify: `src/hooks/index.ts`

**Step 1: Create the theme context and provider**

```typescript
// src/contexts/theme.tsx
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

function getSystemPreference(): 'aleph-cloud-light' | 'aleph-cloud-dark' {
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
 * Must be used within an <AlephThemeProvider>.
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
```

**Step 2: Export from the library**

Add to `src/hooks/index.ts`:
```typescript
export { useThemeSwitch } from '../contexts/theme'
```

Create `src/contexts/index.ts`:
```typescript
export { AlephThemeProvider, useThemeSwitch } from './theme'
export type { AlephThemeProviderProps, ThemeSwitchContextValue } from './theme'
```

Add to `src/index.ts`:
```typescript
export * from './contexts'
```

**Step 3: Verify TypeScript compiles**

Run: `cd /Users/dio/.claude-worktrees/front-core/intelligent-blackburn && npx tsc --noEmit --pretty 2>&1 | head -20`
Expected: No errors

**Step 4: Commit**

```bash
git add src/contexts/ src/hooks/index.ts src/index.ts
git commit -m "feat(themes): add AlephThemeProvider and useThemeSwitch hook"
```

---

## Task 10: Update Storybook Configuration

**Files:**
- Modify: `.storybook/preview.js`

**Step 1: Update theme references and toolbar**

```javascript
import { ThemeProvider } from 'styled-components';
import { themes as theming } from '@storybook/theming';

import { themes } from '../src/themes';
import { GlobalStyles } from '../src/styles';
import logoDark from '../assets/img/aleph-dark.svg';
import logoLight from '../assets/img/aleph-light.svg';

function getThemeColors(theme) {
  const { color } = theme.storybook;

  return {
    brandTitle: 'Aleph Cloud Components',
    brandUrl: 'https://aleph.im/',
    brandImage: theme.name.indexOf('dark') !== -1 || theme.name === 'aleph' ? logoDark : logoLight,
    appBg: color.background,
    appContentBg: color.contentBackground,
    barBg: color.foreground,
    inputBg: color.foreground,
    barSelectedColor: color.secondary,
    colorPrimary: color.primary,
    colorSecondary: color.secondary,
    brandTarget: '_blank'
  }
}

export const argTypes = {
  size: { control: { type: 'inline-radio' } },
  color: {
    control: {
      type: 'color',
      presetColors: Object.entries(themes['aleph-cloud-light'].color).map(([title, color]) => ({ title, color }))
    }
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
  darkMode: {
    current: 'light',
    dark: {
      ...theming.dark,
      ...getThemeColors(themes['aleph-cloud-dark'])
    },
    light: {
      ...theming.normal,
      ...getThemeColors(themes['aleph-cloud-light'])
    }
  },
  docs: {
    inlineStories: false,
    iframeHeight: 500,
    theme: {
      ...theming.normal,
      ...getThemeColors(themes['aleph-cloud-light'])
    },
  }
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Platform Theme',
    defaultValue: 'aleph-cloud-light',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'aleph-cloud-light', title: 'Aleph Cloud Light' },
        { value: 'aleph-cloud-dark', title: 'Aleph Cloud Dark' },
        { value: 'aleph', title: 'Legacy Aleph' },
      ],
    },
  },
}

const themingDecorator = (Story, context) => (
  <>
    <ThemeProvider theme={themes[context.globals.theme]}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  </>
)

export const decorators = [
  themingDecorator
]
```

**Step 2: Verify Storybook starts**

Run: `cd /Users/dio/.claude-worktrees/front-core/intelligent-blackburn && npm run storybook`
Expected: Storybook launches. Toolbar shows three theme options. Switching between them re-renders components.

**Step 3: Commit**

```bash
git add .storybook/preview.js
git commit -m "feat(storybook): update theme toolbar with three theme options"
```

---

## Task 11: Update Storybook Design Utilities

**Files:**
- Modify: `src/components/_design/utils.ts`
- Modify: `src/components/_design/colors.stories.tsx`
- Modify: `src/components/_design/typo.stories.tsx`

**Step 1: Update theme name checks**

In `src/components/_design/utils.ts`, replace:
- `theme.name === 'aleph'` with checks using `getThemeFamily(theme.name) === 'aleph'`

Import `getThemeFamily` from `'../../themes/utils'`.

In `src/components/_design/colors.stories.tsx`, replace:
- `theme.name === 'aleph'` with `getThemeFamily(theme.name) === 'aleph'`
- `theme.name === 'twentysix'` with `getThemeFamily(theme.name) === 'aleph-cloud'`

In `src/components/_design/typo.stories.tsx`, replace:
- `theme.name === 'aleph' ? 'Rubik' : 'RIGID SQUARE'` with `getThemeFamily(theme.name) === 'aleph' ? 'Rubik' : 'RIGID SQUARE'`

**Step 2: Verify TypeScript compiles**

Run: `cd /Users/dio/.claude-worktrees/front-core/intelligent-blackburn && npx tsc --noEmit --pretty 2>&1 | head -20`
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/_design/
git commit -m "fix(storybook): update design stories to use theme family checks"
```

---

## Task 12: Clean Up Old Theme Files

**Files:**
- Delete: `src/themes/aleph.ts` (moved to `src/themes/legacy/aleph.ts`)
- Delete: `src/themes/twentysix.ts` (replaced by `src/themes/aleph-cloud/light.ts`)

**Step 1: Verify nothing imports the old files directly**

Run: `grep -r "from.*['\"]\.\/aleph['\"]" src/themes/` and `grep -r "from.*['\"]\.\/twentysix['\"]" src/themes/`

The only file that should reference them is the old `src/themes/index.ts` (which was already updated in Task 7).

Also check: `grep -r "themes/aleph" src/ .storybook/` and `grep -r "themes/twentysix" src/ .storybook/` to ensure no direct imports from outside the themes directory.

**Step 2: Remove old files**

```bash
git rm src/themes/aleph.ts src/themes/twentysix.ts
```

**Step 3: Verify TypeScript compiles**

Run: `cd /Users/dio/.claude-worktrees/front-core/intelligent-blackburn && npx tsc --noEmit --pretty 2>&1 | head -20`
Expected: No errors

**Step 4: Verify Storybook still works**

Run Storybook and switch through all three themes.

**Step 5: Commit**

```bash
git add -A
git commit -m "refactor(themes): remove old theme files, replaced by new structure"
```

---

## Task 13: Verify Full Build

**Files:** None (verification only)

**Step 1: Run the full build**

Run: `cd /Users/dio/.claude-worktrees/front-core/intelligent-blackburn && npm run build`
Expected: Build succeeds. Output in `dist/` includes theme exports.

**Step 2: Verify exports**

Check that `dist/index.d.ts` (or equivalent) exports:
- `themes` object with `aleph-cloud-light`, `aleph-cloud-dark`, `aleph`, `twentysix` keys
- `alephCloudLight`, `alephCloudDark`, `legacyAleph` named exports
- `AlephThemeProvider`, `useThemeSwitch` exports
- `ThemeName` type export

**Step 3: Run Storybook end-to-end**

Launch Storybook, switch through all three themes, verify:
- Aleph Cloud Light: purple brand, light background, grain effects
- Aleph Cloud Dark: purple brand, dark background, grain effects (placeholder colors)
- Legacy Aleph: cyan/neon brand, dark background, glow/glass/noise effects

**Step 4: Commit (if any fixes were needed)**

```bash
git add -A
git commit -m "fix: address build verification issues"
```

---

## Summary of Deliverables

| # | Task | Files | Type |
|---|------|-------|------|
| 1 | Theme utilities | `src/themes/utils.ts` | Create |
| 2 | Aleph Cloud base | `src/themes/aleph-cloud/base.ts` | Create |
| 3 | Light variant | `src/themes/aleph-cloud/light.ts` | Create |
| 4 | Dark variant (placeholder) | `src/themes/aleph-cloud/dark.ts` | Create |
| 5 | Aleph Cloud index | `src/themes/aleph-cloud/index.ts` | Create |
| 6 | Legacy theme move | `src/themes/legacy/` | Create |
| 7 | Theme index update | `src/themes/index.ts` | Modify |
| 8 | Global styles update | `src/styles/global.tsx` | Modify |
| 9 | Theme provider + hook | `src/contexts/theme.tsx`, `src/hooks/index.ts`, `src/index.ts` | Create + Modify |
| 10 | Storybook config | `.storybook/preview.js` | Modify |
| 11 | Storybook design utils | `src/components/_design/*.ts(x)` | Modify |
| 12 | Clean up old files | `src/themes/aleph.ts`, `src/themes/twentysix.ts` | Delete |
| 13 | Build verification | — | Verify |

## Consuming App Migration (future, not in this plan)

After this library is published, `front-aleph-cloud-page` updates `_app.tsx`:

```tsx
// Before:
import { ThemeProvider } from 'styled-components'
import { themes, GlobalStyles } from '@aleph-front/core'

<ThemeProvider theme={themes.twentysix}>
  <GlobalStyles />
  <GlobalStylesOverride />
  ...
</ThemeProvider>

// After:
import { AlephThemeProvider } from '@aleph-front/core'

<AlephThemeProvider defaultTheme="aleph-cloud-light">
  <GlobalStylesOverride />
  ...
</AlephThemeProvider>
```

And adds a toggle button anywhere using:
```tsx
import { useThemeSwitch } from '@aleph-front/core'

function ThemeToggle() {
  const { isDark, toggleDarkMode } = useThemeSwitch()
  return <button onClick={toggleDarkMode}>{isDark ? 'Light' : 'Dark'}</button>
}
```
