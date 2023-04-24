import { DefaultTheme } from 'styled-components'
import {
  pxToRem,
} from '../styles/utils'
import {
  ThemeBreakpoint,
  ThemeButton,
  ThemeColor,
  ThemeFont,
  ThemeGradient,
  ThemeIcon,
  ThemeSpacing,
  ThemeTypo,
} from './types'

// const breakpoint: ThemeBreakpoint = {
//   xxl: pxToRem(1400),
//   xl: pxToRem(1200),
//   lg: pxToRem(1024),
//   md: pxToRem(768),
//   sm: pxToRem(480),
//   xs: pxToRem(320),
// }

const breakpoint: ThemeBreakpoint = {
  xxl: pxToRem(1400),
  xl: pxToRem(1200),
  lg: pxToRem(992),
  md: pxToRem(768),
  sm: pxToRem(576),
  xs: pxToRem(0),
}

const color: ThemeColor = {
  base0: '#FFFFFF',
  base1: '#141327',
  base2: '#000000',

  main0: '#029AFF',
  main1: '#5CFFB1',
  main2: '#FECD17',

  success: '#7CFF79',
  warn: '#FFD179',
  error: '#D92446',

  background: '#141327',
  contentBackground: '#141327',
  foreground: '#141327',
  text: '#FFFFFF',
}

const gradient: ThemeGradient = {
  main0: {
    colors: ['#00D1FF', '#0054FF'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #00D1FF 0%, #0054FF 100%)',
  },
  main1: {
    colors: ['#EEFF9C', '#00FFBD'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #EEFF9C 0%, #00FFBD 100%)',
  },
  main2: {
    colors: ['#FFE814', '#FBAE18'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #FFE814 0%, #FBAE18 100%)',
  },
  extra0: {
    colors: ['#9B41FF', '#0054FF'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #9B41FF 0%, #0054FF 100%)',
  },
  extra1: {
    colors: ['#F17E4C', '#98203D'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #F17E4C 0%, #98203D 90.62%)',
  },
}

const font: ThemeFont = {
  url: 'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;1,400;1,700&family=Source+Code+Pro:wght@400;700&family=Rubik:ital,wght@0,500;1,600;1,800&display=swap',
  family: {
    head: "'Rubik', sans-serif",
    body: "'Public Sans', sans-serif",
    code: "'Source Code Pro', monospace",
  },
  size: {
    // ---------
    xl4: pxToRem(82),
    xl3: pxToRem(62),
    xxl: pxToRem(48),
    xl: pxToRem(28),
    lg: pxToRem(24),
    md: pxToRem(18),
    sm: pxToRem(16),
    xs: pxToRem(10),
    xxs: pxToRem(8),
    // ---------
  },
}

const commonHeaderFont = {
  tag: true,
  family: font.family.head,
  style: 'italic',
  weight: 800,
  lineHeight: 1.18
}

const typo: ThemeTypo = {
  h1: {
    ...commonHeaderFont,
    size: pxToRem(72),
  },
  h2: {
    ...commonHeaderFont,
    size: pxToRem(64),
  },
  h3: {
    ...commonHeaderFont,
    size: pxToRem(48),
  },
  h4: {
    ...commonHeaderFont,
    size: pxToRem(40),
  },
  h5: {
    ...commonHeaderFont,
    size: pxToRem(36),
  },
  h6: {
    ...commonHeaderFont,
    size: pxToRem(32),
  },
  h7: {
    ...commonHeaderFont,
    tag: false,
    size: pxToRem(24),
  },
  header: {
    ...commonHeaderFont,
    size: pxToRem(128),
  },
  logo: {
    tag: false,
    family: font.family.head,
    style: 'italic',
    weight: 600,
    size: pxToRem(34),
    lineHeight: 1.666
  },
  nav: {
    tag: true,
    family: font.family.head,
    style: 'normal',
    weight: 500,
    size: font.size.md,
    lineHeight: 1.666
  },
  info: {
    tag: false,
    family: font.family.head,
    style: 'italic',
    weight: 800,
    size: pxToRem(10),
    lineHeight: 1.666
  },
  body: {
    tag: true,
    family: font.family.body,
    style: 'normal',
    weight: 400,
    size: font.size.sm,
    lineHeight: 1.666
  },
  body1: {
    tag: false,
    family: font.family.body,
    style: 'italic',
    weight: 400,
    size: font.size.sm,
    lineHeight: 1.666
  },
  body2: {
    tag: false,
    family: font.family.body,
    style: 'italic',
    weight: 700,
    size: font.size.sm,
    lineHeight: 1.666
  },
  code: {
    tag: true,
    family: font.family.code,
    style: 'normal',
    weight: 400,
    size: font.size.sm,
    lineHeight: 1.666
  },
  code1: {
    tag: false,
    family: font.family.code,
    style: 'normal',
    weight: 700,
    size: font.size.sm,
    lineHeight: 1.666
  },
  form: {
    tag: true,
    family: font.family.body,
    style: 'normal',
    weight: 400,
    size: font.size.sm,
    lineHeight: 1.666
  }
}

const icon: ThemeIcon = {
  size: {
    xxl: pxToRem(36),
    xl: pxToRem(24),
    lg: pxToRem(16),
    md: pxToRem(14),
    sm: pxToRem(12),
    xs: pxToRem(8),
  },
}

const button: ThemeButton = {
  font: {
    family: font.family.head,
    style: 'normal',
    weight: 700,
    size: {
      regular: pxToRem(18),
      big: pxToRem(24),
    },
  },
}

const spacing: ThemeSpacing = {
  '0': pxToRem(0),
  'px': pxToRem(1),
  '0.5': pxToRem(2),
  '1': pxToRem(4),
  '1.5': pxToRem(6),
  '2': pxToRem(8),
  '2.5': pxToRem(10),
  '3': pxToRem(12),
  '3.5': pxToRem(14),
  '4': pxToRem(16),
  '5': pxToRem(20),
  '6': pxToRem(24),
  '7': pxToRem(28),
  '8': pxToRem(32),
  '9': pxToRem(36),
  '10': pxToRem(40),
  '11': pxToRem(44),
  '12': pxToRem(48),
  '14': pxToRem(56),
  '16': pxToRem(64),
  '20': pxToRem(80),
  '24': pxToRem(96),
  '28': pxToRem(112),
  '32': pxToRem(128),
  '36': pxToRem(144),
  '40': pxToRem(160),
  '44': pxToRem(176),
  '48': pxToRem(192),
  '52': pxToRem(208),
  '56': pxToRem(224),
  '60': pxToRem(240),
  '64': pxToRem(256),
  '72': pxToRem(288),
  '80': pxToRem(320),
  '96': pxToRem(384),
}

const theme: DefaultTheme = {
  name: 'Base',
  color,
  font,
  typo,
  icon,
  button,
  gradient,
  breakpoint,
  spacing,
}

export default theme
