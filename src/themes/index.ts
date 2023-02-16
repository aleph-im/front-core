import { default as light } from './light'
import { default as dark } from './dark'
import { default as alephLight } from './alephLight'
import { default as alephDark } from './alephDark'

export const themes = {
  dark,
  light,
  alephDark,
  alephLight,
}

// @note: sorted list for storybook UI
export const themeList = [dark, light, alephDark, alephLight]

export { CoreTheme } from './styles'
