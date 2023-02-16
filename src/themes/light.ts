import { DefaultTheme } from 'styled-components'
import { default as base } from './base'

export default {
  ...base,
  name: 'light',
  color: {
    ...base.color,
    background: base.color.base0,
    contentBackground: base.color.base0,
    foreground: base.color.base0,
    text: base.color.base1,
  },
} as DefaultTheme
