import { default as aleph } from './aleph'
import { default as twentysix } from './twentysix'

export const themes = {
  aleph,
  twentysix,
}

// @note: sorted list for storybook UI
export const themeList = [aleph, twentysix]

export type { CoreTheme, BreakpointId, TypoSizeKind, TypoKind } from './types'
