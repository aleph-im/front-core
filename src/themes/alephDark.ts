import { DefaultTheme } from 'styled-components'
import { default as base } from './base'

export default {
  ...base,

  name: 'alephDark',

  color: {
    ...base.color,

    primary: '#0054ff',
    secondary: '#71c9fa',

    background: '#172025',
    contentBackground: '#1d2a31',
    foreground: '#2e363b',
    text: base.color.base2,
  },
} as DefaultTheme
