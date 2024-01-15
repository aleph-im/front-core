import { DefaultTheme } from 'styled-components'
import { pxToRem } from '../styles/utils'
import {
  ThemeBreakpoint,
  ThemeButton,
  ThemeColor,
  ThemeFont,
  ThemeGradient,
  ThemeIcon,
  ThemeFormInput,
  ThemeStorybookConfig,
  ThemeTransition,
  ThemeTypo,
  Typo,
  ThemeForm,
  ThemeFormFeedback,
  ThemeFormSelect,
  ThemeFormRadio,
  ThemeFormCheckbox,
  ThemeFormChip,
  ThemeComponent,
  ThemeBulletList,
  ThemeLabel,
  ThemeLogo,
  ThemeNotification,
  ThemeTab,
  ThemeTag,
} from './types'
import { getGlowMinEffectCss } from '../styles'

const breakpoint: ThemeBreakpoint = {
  '2xl': pxToRem(1400),
  xl: pxToRem(1200),
  lg: pxToRem(992),
  md: pxToRem(768),
  sm: pxToRem(576),
  xs: pxToRem(0),
}

const color: ThemeColor = {
  white: '#FFFFFF',
  black: '#000000',
  translucid: '#FFFFFF0F',

  base0: '#FFFFFF',
  base1: '#141327',
  base2: '#000000',

  main0: '#029AFF',
  main1: '#5CFFB1',
  main2: '#FECD17',

  info: '#029AFF',
  success: '#7CFF79',
  warning: '#FFD179',
  error: '#D92446',
  disabled: '#FFFFFF1A',

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
  info: {
    colors: ['#00D1FF', '#0054FF'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #00D1FF 0%, #0054FF 100%)',
  },
  success: {
    colors: ['#EEFF9E', '#3AFFCC'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #EEFF9E 0%, #3AFFCC 100%)',
  },
  warning: {
    colors: ['#FFF281', '#FBAE18'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #FFF281 0%, #FBAE18 100%)',
  },
  error: {
    colors: ['#FFB393', '#FF6161'],
    stops: [0, 90.62],
    deg: 90,
    fn: 'linear-gradient(90deg, #FFB393 0%, #FF6161 90.62%)',
  },
  disabled: {
    colors: ['#FFFFFF1A', '#FFFFFF0A'],
    stops: [0, 90.62],
    deg: 90,
    fn: 'linear-gradient(90deg, #FFFFFF1A 0%, #FFFFFF0A 90.62%)',
  },
}

const shadows = {
  black0: '0px 4px 24px #00000040',
}

const font: ThemeFont = {
  urls: [
    'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;1,400;1,700&family=Source+Code+Pro:wght@400;700&family=Rubik:ital,wght@0,500;1,600;1,800&display=swap',
  ],
  family: {
    head: "'Rubik', sans-serif",
    body: "'Public Sans', sans-serif",
    code: "'Source Code Pro', monospace",
  },
  size: {
    '28': pxToRem(28),
    '24': pxToRem(24),
    '18': pxToRem(18),
    '16': pxToRem(16),
    // '14': pxToRem(14),
    '12': pxToRem(12),
    '10': pxToRem(10),
  },
}

const defaultFontTypo: Typo = {
  tag: false,
  family: font.family.body,
  style: 'normal',
  weight: 400,
  lineHeight: 1.6,
  size: pxToRem(16),
}

const defaultHeaderFontTypo: Typo = {
  tag: true,
  family: font.family.head,
  style: 'italic',
  weight: 800,
  lineHeight: 'normal',
  size: pxToRem(16),
}

const typo: ThemeTypo = {
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
    style: 'italic',
    weight: 600,
    size: pxToRem(34),
  },
  nav: {
    ...defaultFontTypo,
    tag: true,
    family: font.family.head,
    weight: 500,
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

const transition: ThemeTransition = {
  duration: {
    slow: 700,
    normal: 500,
    fast: 200,
  },
  timing: 'ease-in-out',
}

const storybook: ThemeStorybookConfig = {
  color: {
    primary: '#0054ff',
    secondary: '#71c9fa',
    background: '#172025',
    contentBackground: '#1d2a31',
    foreground: '#2e363b',
    text: '#000000',
  },
}

const input: ThemeFormInput = {
  shadow: shadows.black0,
  color: color.text,
  background: color.translucid,
  border: {
    color: color.white,
    size: 0,
    feedback: {
      size: pxToRem(1),
    },
    focus: {
      size: pxToRem(1),
    },
  },
}

const select: ThemeFormSelect = {
  option: {
    color: color.text,
    background: color.translucid,
    border: '0.0625rem solid #ffffff1a',
    selected: {
      color: color.base2,
      background: gradient.main0.fn,
      shadow: '0px -18px 40px 7px rgba(0, 84, 255, 0.11)',
    },
  },
}

const radio: ThemeFormRadio = {
  disabledType: 'opacity',
  shadow: shadows.black0,
  background: color.translucid,
  dot: {
    background: color.disabled,
    checked: {
      background: gradient.main0,
    },
  },
  border: {
    color: color.main0,
    size: pxToRem(1),
    focus: {
      color: color.white,
    },
    checked: {
      color: color.main0,
    },
  },
}

const checkbox: ThemeFormCheckbox = {
  disabledType: 'opacity',
  shadow: shadows.black0,
  background: color.translucid,
  check: {
    checked: {
      color: '#5cffb1',
      shadow: ($size) => {
        return $size === 'xs'
          ? `
            0px -41px 34px -32px rgba(68, 98, 144, 0.20) inset,
            0px 3.5px 5.5px -2px rgba(255, 255, 255, 0.80) inset,
            0px 2px 5.5px 0px rgba(146, 210, 175, 0.10) inset,
            0px 49px 50px -44px rgba(0, 255, 189, 0.06) inset,
            0px -1px 15px 0px rgba(0, 255, 189, 0.18),
            1.5px 3px 10px -1.5px rgba(0, 255, 189, 0.18)
          `
          : $size === 'sm'
          ? `
            0px -61.5px 51px -48px rgba(68, 98, 144, 0.20) inset,
            0px 5.25px 8.25px -3px rgba(255, 255, 255, 0.80) inset,
            0px 3px 8.25px 0px rgba(146, 210, 175, 0.10) inset,
            0px 73.5px 75px -66px rgba(0, 255, 189, 0.06) inset,
            0px -1.5px 22.5px 0px rgba(0, 255, 189, 0.18),
            2.25px 4.5px 15px -2.25px rgba(0, 255, 189, 0.18)
          `
          : `
            0px -82px 68px -64px rgba(68, 98, 144, 0.20) inset,
            0px 7px 11px -4px rgba(255, 255, 255, 0.80) inset,
            0px 4px 11px 0px rgba(146, 210, 175, 0.10) inset,
            0px 98px 100px -88px rgba(0, 255, 189, 0.06) inset,
            0px -2px 30px 0px rgba(0, 255, 189, 0.18),
            3px 6px 20px -3px rgba(0, 255, 189, 0.18)
          `
      },
    },
  },
  border: {
    color: '#ffffff4d',
    size: pxToRem(1),
    focus: {
      color: color.base0,
    },
    checked: {
      size: pxToRem(1),
    },
  },
}

const chip: ThemeFormChip = {
  background: color.main0,
  color: color.text,
}

const feedback: ThemeFormFeedback = {
  required: color.main0,
  warning: color.warning,
  error: color.error,
}

const form: ThemeForm = {
  feedback,
  input,
  select,
  radio,
  checkbox,
  chip,
}

// -------------------------------

const icon: ThemeIcon = {
  size: {
    '2xl': pxToRem(36),
    xl: pxToRem(24),
    lg: pxToRem(16),
    md: pxToRem(14),
    sm: pxToRem(12),
    xs: pxToRem(8),
  },
}

const button: ThemeButton = {
  glow: true,
  border: {
    size: pxToRem(1),
    focus: {
      size: pxToRem(2),
    },
  },
  font: {
    family: font.family.head,
    style: 'normal',
    weight: 700,
    size: {
      small: pxToRem(18),
      regular: pxToRem(18),
      big: pxToRem(24),
    },
  },
}

const bulletList: ThemeBulletList = {
  bullet: {
    info: {
      background: gradient.main0.fn,
      shadow: `
        inset -4px -1px 11px 0px rgba(61, 92, 255, 0.50),
        inset 0px 1.675px 6px 0px rgba(255, 255, 255, 0.63)
      `,
      css: (fontSize: number) =>
        getGlowMinEffectCss('main0', { height: fontSize * 16 }),
    },
    success: {
      shadow: `
        inset 3px 3px 9px rgba(255, 255, 255, 0.65),
        inset 0px 63px 60px rgba(145, 255, 189, 0.63),
        inset 8.375px 13.4px 46.75px rgba(252, 255, 96, 0.75)
      `,
    },
    warning: {
      background: gradient.main2.fn,
      shadow: `
        inset 3px 3px 9px rgba(255, 255, 255, 0.65),
        inset 0px 63px 60px rgba(255, 138, 0, 0.63),
        inset 8.375px 13.4px 46.75px rgba(255, 135, 83, 0.75)
      `,
      css: (fontSize: number) =>
        getGlowMinEffectCss('main2', { height: fontSize * 16 }),
    },
    error: {
      shadow: `
        inset 0px 1.675px 6px rgba(255, 255, 255, 0.17),
        inset -4px -1px 9px rgba(139, 99, 255, 0.19)
      `,
    },
  },
}

const label: ThemeLabel = {
  color: {
    primary: color.background,
    secondary: color.text,
  },
}

const logo: ThemeLogo = {
  img: 'aleph',
  text: 'Aleph.im',
  gap: '0.2em',
}

const notification: ThemeNotification = {
  color: color.base1,
}

const tab: ThemeTab = {
  color: {
    default: color.base0,
    active: color.main0,
    disabled: `${color.base0}33`,
  },
}

const tag: ThemeTag = {
  color: {
    text: color.text,
    background: 'transparent',
    border: color.disabled,
  },
}

const component: ThemeComponent = {
  icon,
  button,
  bulletList,
  label,
  logo,
  notification,
  tab,
  tag,
}

const theme: DefaultTheme = {
  name: 'aleph',
  color,
  font,
  typo,
  form,
  gradient,
  component,
  transition,
  breakpoint,
  storybook,
}

export default theme