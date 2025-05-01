import { default as aleph } from './aleph'
import { default as twentysix } from './twentysix'
import { default as twentysixDark } from './twentysix-dark'

export const themes = {
  aleph,
  twentysix,
  twentysixDark,
}

// @note: sorted list for storybook UI
export const themeList = [aleph, twentysix, twentysixDark]

export type { CoreTheme, BreakpointId, TypoSizeKind, TypoKind } from './types'
