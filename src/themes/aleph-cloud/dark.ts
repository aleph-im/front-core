import { DefaultTheme, css } from 'styled-components'
import { pxToRem } from '../../styles/utils'
import {
  ThemeButton,
  ThemeColor,
  ThemeGradient,
  ThemeFormInput,
  ThemeStorybookConfig,
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
  ThemeFormSwitch,
  ThemeSidebar,
  ThemeRouterLink,
  ThemeNavbar,
  ThemeNoisyContainer,
  ThemeButtonSchemaVariant,
  ThemeButtonSchema,
  ThemeWalletPicker,
  ThemeFooter,
  ThemeModal,
  ThemeFormFileInput,
} from '../types'
import { getGlassEffectCss } from '../../styles'
import { breakpoint, font, typo, transition, icon } from './base'

const color: ThemeColor = {
  white: '#FFFFFF',
  black: '#000000',
  translucid: '#FFFFFF0F',

  base0: '#1C1B2E', // primary surface (cards, inputs)
  base1: '#0F0E1A', // background reference
  base2: '#F0EBF7', // high contrast text reference

  main0: '#7B3FE4', // brand purple — lightened for dark bg visibility
  main1: '#D4FF00', // brand lime — unchanged, pops on dark

  purple0: '#1A1530', // subtle purple tint background
  purple1: '#211A3D', // slightly more purple
  purple2: '#2A2049', // medium purple surface
  purple3: '#3D2E6B', // active/hover purple surface
  purple4: '#5A3FA0', // strong purple accent (borders, highlights)

  dark0: '#F0EBF71A', // translucent text overlay
  dark1: '#252438', // subtle dark step
  dark2: '#1C1B2E', // matches foreground
  dark3: '#080811', // true dark

  light0: '#F0EBF70D', // very subtle light overlay
  light1: '#F0EBF71A', // light overlay

  info: '#7B3FE4', // matches lightened brand purple
  success: '#3DE64E', // slightly brighter green for dark
  warning: '#FFC040', // slightly brighter amber
  error: '#F04878', // slightly brighter red-pink
  disabled: '#555566', // muted gray for dark
  disabled2: '#FFFFFF15', // slightly less visible on dark

  background: '#0F0E1A', // deep purple-black
  contentBackground: '#161525', // slightly lifted from background
  foreground: '#1C1B2E', // elevated surfaces
  text: '#F0EBF7', // warm off-white with purple tint
}

const gradient: ThemeGradient = {
  main0: {
    colors: ['#141421', '#5100CD'],
    stops: [8.24, 71.81],
    deg: 90,
    fn: 'linear-gradient(90deg, #141421 8.24%, #5100CD 71.81%)',
  },
  main1: {
    colors: ['#D6FF00', '#8AAD00'],
    stops: [27.88, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #D6FF00 27.88%, #8AAD00 100%)',
  },
  extra0: {
    colors: ['#D6FF0066', '#D2CCFB66'],
    stops: [19.1, 106.92],
    deg: 121,
    fn: 'linear-gradient(121deg, #D6FF0066 19.1%, #D2CCFB66 106.92%)',
  },
  info: {
    colors: ['#5A3FA0', '#7B3FE4'],
    stops: [22.66, 244.27],
    deg: 90,
    fn: 'linear-gradient(90deg, #5A3FA0 22.66%, #7B3FE4 244.27%)',
  },
  success: {
    colors: ['#36D846', '#63E570'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #36D846 0%, #63E570 100%)',
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
    colors: ['#55556633', '#55556615'],
    stops: [0, 90.62],
    deg: 90,
    fn: 'linear-gradient(90deg, #55556633 0%, #55556615 90.62%)',
  },
  info2: {
    colors: ['#5A3FA033', '#7B3FE433'],
    stops: [22.66, 244.27],
    deg: 90,
    fn: 'linear-gradient(90deg, #5A3FA033 22.66%, #7B3FE433 244.27%)',
  },
  success2: {
    colors: ['#3DE64E33', '#63E57033'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #3DE64E33 0%, #63E57033 100%)',
  },
  warning2: {
    colors: ['#FFC04033', '#FBAE1833'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #FFC04033 0%, #FBAE1833 100%)',
  },
  error2: {
    colors: ['#F0487833', '#DE366833'],
    stops: [0, 90.62],
    deg: 90,
    fn: 'linear-gradient(90deg, #F0487833 0%, #DE366833 90.62%)',
  },
}

const shadows = {
  purple0: '0px 4px 24px #7B3FE433',
  purple1: '0px 4px 24px #7B3FE466',
  purple2: '0px 4px 4px #7B3FE433',
}

const storybook: ThemeStorybookConfig = {
  color: {
    primary: '#7B3FE4',
    secondary: '#7B3FE4',
    background: '#0F0E1A',
    contentBackground: '#161525',
    foreground: '#1C1B2E',
    text: '#F0EBF7',
  },
}

const input: ThemeFormInput = {
  shadow: shadows.purple0,
  color: {
    default: color.text,
    data: color.main0,
  },
  background: {
    default: color.base0,
    data: color.purple3,
  },
  border: {
    color: color.text,
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

const switchcmp: ThemeFormSwitch = {
  disabledType: 'grayscale',
  shadow: shadows.purple0,
  dot: {
    background: color.text,
    checked: {
      background: color.main0,
    },
  },
  border: {
    color: color.text,
    size: pxToRem(1),
    focus: {
      color: color.text,
      size: pxToRem(2),
    },
    checked: {
      color: color.main0,
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
    color: color.purple4,
    size: pxToRem(3),
    focus: {
      color: color.text,
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
    color: color.purple4,
    size: pxToRem(3),
    focus: {
      color: color.text,
      size: pxToRem(3),
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

const file: ThemeFormFileInput = {
  color: color.text,
  background: gradient.info2.fn,
  border: `0.2rem dashed ${color.purple4}`,
  hover: {
    color: color.text,
    background: gradient.info.fn,
    border: `0.2rem dashed ${color.main0}`,
  },
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
  switch: switchcmp,
  radio,
  checkbox,
  chip,
  file,
}

// -------------------------------

// ----------------------------------------------

const defaultButton: ThemeButtonSchemaVariant = {
  padding: '0.5rem 1.375rem',
  color: {
    default: color.text,
    disabled: color.disabled,
  },
  height: {
    sm: pxToRem(30),
    md: pxToRem(38),
    lg: pxToRem(45),
  },
  css: {
    hover: ($color: string) => css`
      filter: drop-shadow(0px 4px 24px ${color[$color]}46);
      /* filter: drop-shadow(0px 4px 24px ${color[$color]}26); */
      /* filter: drop-shadow(0px 4px 24px ${color[$color]}80); */
    `,
  },
  border: {
    type: 'full',
    size: {
      default: pxToRem(3),
      focus: pxToRem(3),
      disabled: pxToRem(3),
    },
    background: {
      disabled: color.disabled,
      focus: color.text,
    },
  },
  outline: {
    size: {
      default: pxToRem(0),
      focus: pxToRem(0),
      disabled: pxToRem(0),
    },
    color: {
      focus: color.base1,
    },
  },
  font: {
    family: font.family.head,
    style: 'normal',
    weight: 700,
    size: {
      sm: pxToRem(14),
      md: pxToRem(18),
      lg: pxToRem(24),
    },
  },
}

const primaryGradientButton: ThemeButtonSchemaVariant = {
  ...defaultButton,
  css: {
    hover: ($color: string) => css`
      filter: drop-shadow(0px 4px 24px ${color[$color]}80);
    `,
  },
  color: {
    ...defaultButton.color,
    default: color.white,
    disabled: color.white,
  },
  gradient: {
    ...defaultButton.gradient,
    default: true,
    disabled: color.disabled,
  },
  border: {
    ...defaultButton.border,
    size: {
      ...defaultButton.border.size,
      default: pxToRem(0),
      disabled: pxToRem(0),
    },
  },
}

const secondaryGradientButton: ThemeButtonSchemaVariant = {
  ...defaultButton,
  border: {
    ...defaultButton.border,
    gradient: {
      ...defaultButton.border.gradient,
      default: true,
    },
  },
}

const tertiaryGradientButton: ThemeButtonSchemaVariant = {
  ...secondaryGradientButton,
  transparency: '10',
  background: {
    ...secondaryGradientButton.background,
    default: true,
  },
}

const textOnlyGradientButton: ThemeButtonSchemaVariant = {
  ...defaultButton,
  border: {
    ...defaultButton.border,
    type: 'underscore',
    gradient: {
      ...defaultButton.border.gradient,
      default: true,
    },
  },
}

const GradientButton: ThemeButtonSchema = {
  primary: primaryGradientButton,
  secondary: secondaryGradientButton,
  tertiary: tertiaryGradientButton,
  textOnly: textOnlyGradientButton,
}

// -------------------------------

const primaryFlatButton: ThemeButtonSchemaVariant = {
  ...defaultButton,
  color: {
    ...defaultButton.color,
    default: color.white,
    disabled: color.white,
  },
  background: {
    ...defaultButton.background,
    default: true,
    disabled: color.disabled,
  },
  border: {
    ...defaultButton.border,
    size: {
      ...defaultButton.border.size,
      default: pxToRem(0),
      disabled: pxToRem(0),
    },
  },
}

const secondaryFlatButton: ThemeButtonSchemaVariant = {
  ...defaultButton,
  border: {
    ...defaultButton.border,
    background: {
      ...defaultButton.border.background,
      default: true,
    },
  },
}

const tertiaryFlatButton: ThemeButtonSchemaVariant = {
  ...secondaryFlatButton,
  transparency: '10',
  background: {
    ...secondaryFlatButton.background,
    default: true,
  },
}

const textOnlyFlatButton: ThemeButtonSchemaVariant = {
  ...defaultButton,
  border: {
    ...defaultButton.border,
    type: 'underscore',
    background: {
      ...defaultButton.border.background,
      default: true,
    },
  },
}

const flatButton: ThemeButtonSchema = {
  primary: primaryFlatButton,
  secondary: secondaryFlatButton,
  tertiary: tertiaryFlatButton,
  textOnly: textOnlyFlatButton,
}

// -------------------------------

const defaultYellowButton: ThemeButtonSchemaVariant = {
  ...defaultButton,
  css: {
    hover: () => css`
      filter: drop-shadow(0px 4px 24px ${color.main1}46);
    `,
  },
}

const primaryYellowButton: ThemeButtonSchemaVariant = {
  ...defaultYellowButton,
  color: {
    ...defaultYellowButton.color,
    disabled: color.white,
  },
  gradient: {
    ...defaultYellowButton.gradient,
    default: gradient.main1,
    disabled: color.disabled,
  },
  border: {
    ...defaultYellowButton.border,
    background: {
      ...defaultYellowButton.border.background,
      default: color.text,
    },
    size: {
      ...defaultYellowButton.border.size,
      disabled: pxToRem(0),
    },
  },
}

const secondaryYellowButton: ThemeButtonSchemaVariant = {
  ...defaultYellowButton,
  background: {
    ...defaultYellowButton.background,
    default: color.main1,
    disabled: 'transparent',
  },
  border: {
    ...defaultYellowButton.border,
    gradient: {
      ...defaultYellowButton.border.gradient,
      default: gradient.main1,
    },
  },
}

const tertiaryYellowButton: ThemeButtonSchemaVariant = {
  ...secondaryYellowButton,
  transparency: '10',
}

const textOnlyYellowButton: ThemeButtonSchemaVariant = {
  ...defaultButton,
  border: {
    ...defaultButton.border,
    type: 'underscore',
    gradient: {
      ...defaultButton.border.gradient,
      default: gradient.main1,
    },
  },
}

const yellowButton: ThemeButtonSchema = {
  primary: primaryYellowButton,
  secondary: secondaryYellowButton,
  tertiary: tertiaryYellowButton,
  textOnly: textOnlyYellowButton,
}
// -------------------------------

const primaryFunctionalButton: ThemeButtonSchemaVariant = {
  ...defaultButton,
  css: {
    hover: () => css`
      filter: drop-shadow(0px 4px 24px ${color.main0}80);
    `,
  },
  color: {
    ...defaultButton.color,
    default: color.white,
    disabled: color.white,
  },
  background: {
    ...defaultButton.background,
    default: color.text,
    disabled: color.disabled,
  },
  border: {
    ...defaultButton.border,
    size: {
      ...defaultButton.border.size,
      default: pxToRem(0),
      disabled: pxToRem(0),
    },
  },
}

const secondaryFunctionalButton: ThemeButtonSchemaVariant = {
  ...defaultButton,
  css: {
    hover: () => css`
      filter: drop-shadow(0px 4px 24px ${color.main0}46);
    `,
  },
  background: {
    ...defaultButton.background,
    default: color.base1,
    disabled: 'transparent',
  },
  border: {
    ...defaultButton.border,
    background: {
      ...defaultButton.border.background,
      default: color.text,
    },
  },
}

const errorFunctionalButton: ThemeButtonSchemaVariant = {
  ...defaultButton,
  css: {
    hover: () => css`
      filter: drop-shadow(0px 4px 24px ${color.error}80);
    `,
  },
  gradient: {
    ...defaultButton.gradient,
    default: gradient.error2,
    disabled: 'transparent',
  },
  background: {
    ...defaultButton.background,
    default: '#1C1B2E',
  },
  outline: {
    ...defaultButton.outline,
    size: {
      ...defaultButton.outline.size,
      focus: pxToRem(2),
    },
    color: {
      ...defaultButton.outline.color,
      focus: color.text,
    },
  },
  border: {
    ...defaultButton.border,
    gradient: {
      ...defaultButton.border.gradient,
      default: gradient.error,
      focus: gradient.error,
    },
  },
}

const warningFunctionalButton: ThemeButtonSchemaVariant = {
  ...errorFunctionalButton,
  css: {
    hover: () => css`
      filter: drop-shadow(0px 4px 24px ${color.warning}80);
    `,
  },
  gradient: {
    ...errorFunctionalButton.gradient,
    default: gradient.warning2,
  },
  border: {
    ...errorFunctionalButton.border,
    gradient: {
      ...errorFunctionalButton.border.gradient,
      default: gradient.warning,
      focus: gradient.warning,
    },
  },
}

const functionalButton: ThemeButtonSchema = {
  primary: primaryFunctionalButton,
  secondary: secondaryFunctionalButton,
  error: errorFunctionalButton,
  warning: warningFunctionalButton,
}

// -------------------------------

const primaryRoundedButton: ThemeButtonSchemaVariant = {
  ...defaultButton,
  padding: '0.5rem',
  color: {
    ...defaultButton.color,
    default: color.text,
    disabled: color.disabled,
  },
  background: {
    ...defaultButton.background,
    default: true,
  },
  border: {
    ...defaultButton.border,
    background: {
      default: color.text,
      focus: color.text,
      disabled: color.disabled,
    },
    size: {
      ...defaultButton.border.size,
      default: pxToRem(2),
      focus: pxToRem(3),
      disabled: pxToRem(2),
    },
  },
}

const roundedButton: ThemeButtonSchema = {
  primary: primaryRoundedButton,
}

// -------------------------------

const button: ThemeButton = {
  default: GradientButton,
  gradient: GradientButton,
  flat: flatButton,
  yellow: yellowButton,
  functional: functionalButton,
  rounded: roundedButton,
}

// -------------------------------
// -------------------------------

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
  gap: '0.15em',
  by: {
    color: color.purple4,
  },
}

const notification: ThemeNotification = {
  color: color.text,
  background: {
    success: gradient.info.fn,
  },
}

const modal: ThemeModal = {
  color: color.text,
  background: color.base1,
  overlay: {
    background: color.main0 + '1A',
  },
}

const tab: ThemeTab = {
  color: {
    default: color.text,
    active: color.main0,
    disabled: color.dark0,
  },
}

const tag: ThemeTag = {
  variant: {
    default: {
      color: {
        text: color.text,
        background: color.purple3,
        border: '#2A2049',
      },
    },
    accent: {
      color: {
        text: color.white,
        background: color.main0,
        border: '#2A2049',
      },
    },
  },
}

const routerLink: ThemeRouterLink = {
  variant: {
    '1': {
      color: {
        default: color.white,
        hover: color.main1,
        active: color.main1,
        disabled: '#92929280',
      },
    },
    '2': {
      color: {
        default: color.white,
        hover: color.white,
        active: color.main1,
        disabled: '#92929280',
      },
      icon: {
        color: {
          default: color.white,
          hover: color.main1,
          active: color.main1,
          disabled: '#92929280',
        },
      },
    },
    '3': {
      underscore: true,
      color: {
        default: color.text,
        hover: color.main0,
        active: color.main0,
        disabled: '#92929280',
      },
    },
    '4': {
      background: {
        active: color.main1,
        disabled: 'transparent',
      },
      color: {
        default: color.white,
        hover: color.white,
        active: color.dark3,
        disabled: '#92929280',
      },
      icon: {
        color: {
          default: color.text,
          hover: color.main1,
          active: color.dark3,
          disabled: '#92929280',
        },
      },
    },
  },
}

const sidebar: ThemeSidebar = {
  nav1: {
    background: color.dark3,
    logo: {
      background: color.main1,
      padding: '2rem 0',
      size: pxToRem(38),
    },
    active: {
      background: color.dark2,
      background2: color.main1,
    },
  },
  nav2: {
    color: color.white,
    background: color.dark2,
    mainTitle: {
      color: color.light1,
    },
    title: {
      color: color.white,
      underline: color.main0,
    },
    progress: {
      color: color.main1,
    },
    toggle: {
      color: color.dark2,
      background: color.white,
    },
    active: {
      color: color.dark3,
      background: color.main1,
    },
  },
}

const navbar: ThemeNavbar = {
  logoText: true,
  color: color.text,
  tablet: {
    buttonColor: color.text,
  },
  mobile: {
    header: {
      shadow: shadows.purple0,
      css: () => getGlassEffectCss('base2'),
    },
    content: {
      css: () => getGlassEffectCss('base2'),
      color: color.white,
      background: color.text,
      child: {
        background: color.dark2,
        radius: pxToRem(0),
      },
    },
  },
}

const walletPicker: ThemeWalletPicker = {
  color: {
    default: color.text,
    disabled: color.text,
    rewards: color.main0,
  },
  background: '#F0EBF70A',
  shadow: shadows.purple0,
  border: {
    size: pxToRem(3),
    color: color.purple2,
  },
  button: {
    kind: () => 'rounded',
    variant: () => 'primary',
    color: (s) => (s ? color.main1 : color.base1),
  },
  button2: {
    kind: 'gradient',
    variant: 'secondary',
    color: 'main0',
    iconColor: color.text,
  },
  button3: {
    kind: 'functional',
    variant: 'primary',
  },
  button4: {
    kind: 'functional',
    variant: 'warning',
  },
  button5: {
    kind: 'yellow',
    variant: 'primary',
    color: 'main0',
  },
}

const noisyContainer: ThemeNoisyContainer = {
  default: 'grain-3',
  borderRadius: pxToRem(0),
}

const footer: ThemeFooter = {
  background: color.white,
  color: color.text,
  link: {
    gradient: gradient.main0,
  },
}

const component: ThemeComponent = {
  icon,
  button,
  bulletList,
  label,
  logo,
  notification,
  modal,
  tab,
  tag,
  routerLink,
  sidebar,
  navbar,
  walletPicker,
  noisyContainer,
  footer,
}

const theme: DefaultTheme = {
  name: 'aleph-cloud-dark',
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
