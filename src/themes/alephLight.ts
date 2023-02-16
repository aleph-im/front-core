import { DefaultTheme } from 'styled-components'
import { default as base } from './base'

export default {
  ...base,

  name: 'alephLight',

  color: {
    ...base.color,

    primary: '#0054ff',
    secondary: '#71c9fa',

    background: '#ffffff',
    contentBackground: '#f8f8f8',
    foreground: '#ffffff',
    text: base.color.base0,
  },
} as DefaultTheme
