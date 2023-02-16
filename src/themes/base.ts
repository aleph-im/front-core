import { DefaultTheme } from 'styled-components'
import {
  getDarkEffectCss,
  getGlassEffectCss,
  getGlowHoverEffectCss,
  getGlowMaxEffectCss,
  getGlowMinEffectCss,
} from '../styles'
import {
  ThemeButton,
  ThemeColor,
  ThemeEffect,
  ThemeFont,
  ThemeGradient,
  ThemeIcon,
  ThemeTypo,
} from './styles'

const round = (n: number, precission: number) => {
  const m = 10 ** precission
  return Math.round(n * m + Number.EPSILON) / m
}

const pxToRem = (px: number, base: number = 16) => {
  return round(Number(px / base), 3)
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

const effect: ThemeEffect = {
  glow: {
    max: {
      main0: getGlowMaxEffectCss('main0'),
      main1: getGlowMaxEffectCss('main1'),
      main2: getGlowMaxEffectCss('main2'),
      extra0: getGlowMaxEffectCss('extra0'),
      extra1: getGlowMaxEffectCss('extra1'),
    },
    min: {
      main0: getGlowMinEffectCss('main0'),
      main1: getGlowMinEffectCss('main1'),
      main2: getGlowMinEffectCss('main2'),
    },
    hover: {
      main0: getGlowHoverEffectCss('main0'),
      main1: getGlowHoverEffectCss('main1'),
      main2: getGlowHoverEffectCss('main2'),
    },
  },
  glass: {
    main0: getGlassEffectCss('main0'),
    main1: getGlassEffectCss('main1'),
    main2: getGlassEffectCss('main2'),
    base0: getGlassEffectCss('base0'),
    base1: getGlassEffectCss('base1'),
    base2: getGlassEffectCss('base2'),
    colored0: getGlassEffectCss('colored0'),
  },
  dark: {
    main0: getDarkEffectCss('main0'),
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
    xl: pxToRem(28),
    lg: pxToRem(24),
    md: pxToRem(18),
    sm: pxToRem(16),
    xs: pxToRem(10),
    // ---------
  },
}

const commonHeaderFont = {
  tag: true,
  family: font.family.head,
  style: 'italic',
  weight: 800,
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
    size: pxToRem(24),
  },
  header: {
    ...commonHeaderFont,
    size: pxToRem(128),
  },
  nav: {
    tag: true,
    family: font.family.head,
    style: 'normal',
    weight: 500,
    size: font.size.md,
  },
  info: {
    tag: false,
    family: font.family.head,
    style: 'italic',
    weight: 800,
    size: pxToRem(10),
  },
  body: {
    tag: true,
    family: font.family.body,
    style: 'normal',
    weight: 400,
    size: font.size.sm,
  },
  body1: {
    tag: false,
    family: font.family.body,
    style: 'italic',
    weight: 400,
    size: font.size.sm,
  },
  body2: {
    tag: false,
    family: font.family.body,
    style: 'italic',
    weight: 700,
    size: font.size.sm,
  },
  code: {
    tag: true,
    family: font.family.code,
    style: 'normal',
    weight: 400,
    size: font.size.sm,
  },
  code1: {
    tag: false,
    family: font.family.code,
    style: 'normal',
    weight: 700,
    size: font.size.sm,
  },
}

const icon: ThemeIcon = {
  size: {
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

const theme: DefaultTheme = {
  name: 'Base',
  color,
  font,
  typo,
  icon,
  button,
  gradient,
  effect,
}

export default theme
