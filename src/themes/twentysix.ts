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
  base1: '#F9F4FF',
  base2: '#141421',

  main0: '#5100CD',
  main1: '#D4FF00',

  purple0: '#F5EDFF',
  purple1: '#EDE4FB',
  purple2: '#DBC8F6',
  purple3: '#C8ADF0',

  dark0: '#1414211A',
  dark1: '#1D1D2A',
  dark2: '#1F1F31',
  dark3: '#000000',

  light0: '#F9F4FF4D',
  light1: '#F9F4FF80',

  info: '#5100CD',
  success: '#47FF59',
  warning: '#FECD17',
  error: '#D9245A',
  disabled: '#81818F',

  background: '#F9F4FF',
  contentBackground: '#F9F4FF',
  foreground: '#F9F4FF',
  text: '#000000',
}

const gradient: ThemeGradient = {
  main0: {
    colors: ['#141421', '#5100CD'],
    stops: [8.24, 71.81],
    deg: 90,
    fn: 'linear-gradient(90deg, #141421 8.24%, #5100CD 71.81%)',
  },
  main1: {
    colors: ['#D6FF00', '#F5F7DB'],
    stops: [27.88, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #D6FF00 27.88%, #F5F7DB 100%)',
  },
  extra0: {
    colors: ['#D6FF0066', '#D2CCFB66'],
    stops: [19.1, 106.92],
    deg: 121,
    fn: 'linear-gradient(121deg, #D6FF0066 19.1%, #D2CCFB66 106.92%)',
  },
  info: {
    colors: ['#C8ADF0', '#5100CD'],
    stops: [22.66, 244.27],
    deg: 90,
    fn: 'linear-gradient(90deg, #C8ADF0 22.66%, #5100CD 244.27%)',
  },
  success: {
    colors: ['#38EC49', '#47FF59'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #38EC49 0%, #47FF59 100%)',
  },
  warning: {
    colors: ['#FFE814', '#FBAE18'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #FFE814 0%, #FBAE18 100%)',
  },
  error: {
    colors: ['#FFAC89', '#DE3668'],
    stops: [0, 90.62],
    deg: 90,
    fn: 'linear-gradient(90deg, #FFAC89 0%, #DE3668 90.62%)',
  },
  disabled: {
    colors: ['#81818F1A', '#81818F0A'],
    stops: [0, 90.62],
    deg: 90,
    fn: 'linear-gradient(90deg, #81818F1A 0%, #81818F0A 90.62%)',
  },
}

const shadows = {
  purple0: '0px 4px 24px #5100cd26',
  purple1: '0px 4px 24px #5100cd73',
  purple2: '0px 4px 4px #5100cd26',
}

const font: ThemeFont = {
  urls: [
    'https://use.typekit.net/acb7qvn.css',
    'https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,400;1,400;1,700&family=Source+Code+Pro:wght@400;700',
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
    style: 'normal',
    weight: 900,
    size: pxToRem(34),
    spacing: '-0.05em',
    transform: 'lowercase',
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
  shadow: shadows.purple0,
  color: color.text,
  background: color.base0,
  border: {
    color: color.black,
    size: 0,
    feedback: {
      size: pxToRem(1),
    },
    focus: {
      size: pxToRem(2),
    },
  },
}

const select: ThemeFormSelect = {
  option: {
    color: color.text,
    background: color.base0,
    selected: {
      color: color.base0,
      background: color.main0,
    },
  },
}

const radio: ThemeFormRadio = {
  disabledType: 'grayscale',
  shadow: shadows.purple0,
  background: color.translucid,
  dot: {
    background: color.white,
    checked: {
      background: gradient.main0,
    },
  },
  border: {
    color: color.purple3,
    size: pxToRem(3),
    focus: {
      color: color.black,
    },
    checked: {
      color: color.main0,
    },
  },
}

const checkbox: ThemeFormCheckbox = {
  disabledType: 'grayscale',
  shadow: shadows.purple0,
  background: color.translucid,
  check: {
    checked: {
      color: color.white,
      background: gradient.main0.fn,
    },
  },
  border: {
    color: color.purple3,
    size: pxToRem(3),
    focus: {
      color: color.black,
    },
    checked: {
      size: pxToRem(0),
    },
  },
}

const chip: ThemeFormChip = {
  background: color.main0,
  color: color.white,
  fontWeight: 'bold',
}

const feedback: ThemeFormFeedback = {
  required: color.main0,
  warning: color.info,
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
  glow: false,
  border: {
    size: pxToRem(3),
    focus: {
      size: pxToRem(3),
    },
  },
  font: {
    family: font.family.head,
    style: 'normal',
    weight: 700,
    size: {
      small: pxToRem(14),
      regular: pxToRem(18),
      big: pxToRem(24),
    },
  },
}

const bulletList: ThemeBulletList = {
  bullet: {
    info: {
      background: gradient.main0.fn,
    },
  },
}

const label: ThemeLabel = {
  color: {
    primary: color.text,
    secondary: color.text,
  },
}

const logo: ThemeLogo = {
  img: 'twentysix',
  text: 'twentysix',
  gap: '0',
}

const notification: ThemeNotification = {
  color: color.base2,
  background: {
    success: gradient.info.fn,
  },
}

const tab: ThemeTab = {
  color: {
    default: color.base2,
    active: color.main0,
    disabled: color.dark0,
  },
}

const tag: ThemeTag = {
  color: {
    text: color.text,
    background: color.purple2,
    border: color.purple1,
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
  name: 'twentysix',
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