import { DefaultTheme } from 'styled-components'
import { default as base } from './base'

export default {
  ...base,
  name: 'dark',
  color: {
    ...base.color,
    background: base.color.base1,
    contentBackground: base.color.base1,
    foreground: base.color.base1,
    text: base.color.base0,
  },
} as DefaultTheme
