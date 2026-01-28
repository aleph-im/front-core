import { pxToRem } from '../../styles/utils'
import {
  ThemeBreakpoint,
  ThemeFont,
  ThemeIcon,
  ThemeTransition,
  ThemeTypo,
  Typo,
} from '../types'

export const breakpoint: ThemeBreakpoint = {
  '2xl': pxToRem(1400),
  xl: pxToRem(1200),
  lg: pxToRem(992),
  md: pxToRem(768),
  sm: pxToRem(576),
  xs: pxToRem(0),
}

export const font: ThemeFont = {
  urls: [
    'https://use.typekit.net/acb7qvn.css',
    'https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,400;0,700;1,400;1,700&family=Source+Code+Pro:wght@400;700&display=swap',
  ],
  family: {
    head: "'rigid-square', sans-serif",
    body: "'Titillium Web', sans-serif",
    code: "'Source Code Pro', monospace",
  },
  size: {
    '28': pxToRem(28),
    '24': pxToRem(24),
    '18': pxToRem(18),
    '16': pxToRem(16),
    '14': pxToRem(14),
    '12': pxToRem(12),
    '10': pxToRem(10),
  },
}

export const defaultFontTypo: Typo = {
  tag: false,
  family: font.family.body,
  style: 'normal',
  weight: 400,
  lineHeight: 1.6,
  size: pxToRem(16),
}

export const defaultHeaderFontTypo: Typo = {
  tag: true,
  family: font.family.head,
  style: 'italic',
  weight: 800,
  lineHeight: 'normal',
  size: pxToRem(16),
}

export const typo: ThemeTypo = {
  h1: {
    ...defaultHeaderFontTypo,
    size: pxToRem(72),
  },
  h2: {
    ...defaultHeaderFontTypo,
    size: pxToRem(64),
  },
  h3: {
    ...defaultHeaderFontTypo,
    size: pxToRem(48),
  },
  h4: {
    ...defaultHeaderFontTypo,
    size: pxToRem(40),
  },
  h5: {
    ...defaultHeaderFontTypo,
    size: pxToRem(36),
  },
  h6: {
    ...defaultHeaderFontTypo,
    size: pxToRem(32),
  },
  h7: {
    ...defaultHeaderFontTypo,
    tag: false,
    size: pxToRem(24),
  },
  header: {
    ...defaultHeaderFontTypo,
    size: pxToRem(128),
  },
  logo: {
    ...defaultFontTypo,
    family: font.family.head,
    style: 'normal',
    weight: 900,
    size: pxToRem(34),
    spacing: '-0.05em',
  },
  nav: {
    ...defaultFontTypo,
    tag: true,
    family: font.family.head,
    weight: 700,
    lineHeight: 'normal',
    size: pxToRem(18),
  },
  info: {
    ...defaultFontTypo,
    family: font.family.head,
    style: 'italic',
    weight: 800,
    lineHeight: 'normal',
    size: pxToRem(10),
    transform: 'uppercase',
  },
  body: {
    ...defaultFontTypo,
    tag: true,
  },
  body1: {
    ...defaultFontTypo,
    style: 'italic',
  },
  body2: {
    ...defaultFontTypo,
    style: 'italic',
    weight: 700,
  },
  body3: {
    ...defaultFontTypo,
    weight: 700,
  },
  code: {
    ...defaultFontTypo,
    tag: true,
    family: font.family.code,
  },
  code1: {
    ...defaultFontTypo,
    family: font.family.code,
    weight: 700,
  },
  table: {
    ...defaultFontTypo,
    weight: 700,
    size: pxToRem(12),
  },
  form: {
    ...defaultFontTypo,
    tag: true,
  },
}

export const transition: ThemeTransition = {
  duration: {
    slow: 700,
    normal: 500,
    fast: 200,
  },
  timing: 'ease-in-out',
}

export const icon: ThemeIcon = {
  size: {
    '2xl': pxToRem(36),
    xl: pxToRem(24),
    lg: pxToRem(16),
    md: pxToRem(14),
    sm: pxToRem(12),
    xs: pxToRem(8),
  },
}
