import { alephCloudLight, alephCloudDark } from './aleph-cloud'
import { legacyAleph } from './legacy'

// --- New theme exports ---
export { alephCloudLight, alephCloudDark } from './aleph-cloud'
export { legacyAleph } from './legacy'

export const themes: Record<string, import('./types').CoreTheme> = {
  'aleph-cloud-light': alephCloudLight,
  'aleph-cloud-dark': alephCloudDark,
  aleph: legacyAleph,

  /** @deprecated Use 'aleph-cloud-light' or themes['aleph-cloud-light']. This alias will be removed in a future version. */
  twentysix: alephCloudLight,
}

export type ThemeName = 'aleph-cloud-light' | 'aleph-cloud-dark' | 'aleph'

// @note: sorted list for storybook UI
export const themeList = [alephCloudLight, alephCloudDark, legacyAleph]

export type { CoreTheme, BreakpointId, TypoSizeKind, TypoKind } from './types'
