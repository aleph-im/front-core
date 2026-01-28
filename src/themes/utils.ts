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
