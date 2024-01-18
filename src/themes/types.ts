import {
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components'

export type CssOutput =
  | string
  | FlattenInterpolation<any>
  | FlattenSimpleInterpolation
  | SimpleInterpolation
  | undefined

export type BreakpointId = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type ThemeBreakpoint = Record<BreakpointId, number>

export type TypoSizeKind = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TypoSize = Record<TypoSizeKind, number>

export type TypoKind =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'header'
  | 'logo'
  | 'nav'
  | 'info'
  | 'body'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'code'
  | 'code1'
  | 'table'
  | 'form'
export type Typo = {
  tag: boolean
  size: number
  family: string
  weight: number
  style: 'normal' | 'italic'
  lineHeight: number | string | 'normal'
  spacing?: string
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none'
}
export type ThemeTypo = Record<TypoKind, Typo>

export type Gradient = {
  colors: string[]
  stops: number[]
  deg: number
  fn: string
}

export type ThemeGradient = {
  [k: string]: Gradient

  main0: Gradient
  main1: Gradient

  info: Gradient
  success: Gradient
  warning: Gradient
  error: Gradient
  disabled: Gradient
}

export type ThemeColor = {
  [k: string]: string

  white: string
  black: string
  translucid: string

  base0: string
  base1: string
  base2: string

  main0: string
  main1: string

  info: string
  success: string
  warning: string
  error: string
  disabled: string

  background: string
  contentBackground: string
  foreground: string
  text: string
}

export type ThemeFont = {
  urls: string[]
  size: {
    [k: string]: number

    '28': number
    '24': number
    '18': number
    '16': number
    '12': number
    '10': number
  }
  family: {
    head: string
    body: string
    code: string
  }
}

// -----------------------------------

export type ThemeTransition = {
  duration: {
    slow: number
    normal: number
    fast: number
  }
  timing: string
}

// -----------------------------------

export type ThemeStorybookConfig = {
  color: {
    primary: string
    secondary: string
    background: string
    contentBackground: string
    foreground: string
    text: string
  }
}

// -----------------------------------

export type ThemeFormInput = {
  shadow: string
  color: string
  background: string
  border: {
    color: string
    size: number
    feedback: {
      size: number
    }
    focus: {
      size: number
    }
  }
}

export type ThemeFormSelect = {
  option: {
    border?: string
    color: string
    background: string
    selected: {
      color: string
      background: string
      shadow?: string
    }
  }
}

export type ThemeFormSwitch = {
  disabledType?: 'opacity' | 'grayscale'
  shadow?: string
  dot: {
    shadow?: string
    background: string
    checked: {
      background: string | Gradient
    }
  }
  border: {
    color: string
    size: number
    focus: {
      color: string
      size: number
    }
    checked: {
      color: string
    }
  }
}

export type ThemeFormRadio = {
  disabledType?: 'opacity' | 'grayscale'
  shadow?: string
  background: string
  dot: {
    background: string
    checked: {
      background: string | Gradient
    }
  }
  border: {
    color: string
    size: number
    focus: {
      color: string
    }
    checked: {
      color: string
    }
  }
}

export type ThemeFormCheckbox = {
  disabledType?: 'opacity' | 'grayscale'
  shadow?: string | ((...args: any[]) => string)
  background: string
  check: {
    checked: {
      color: string
      background?: string
      shadow?: (...args: any[]) => string
    }
  }
  border: {
    color: string
    size: number
    focus: {
      color: string
      size: number
    }
    checked: {
      size: number
    }
  }
}

export type ThemeFormChip = {
  background: string
  color: string
  fontWeight?: string
}

export type ThemeFormFeedback = {
  required: string
  warning: string
  error: string
}

export type ThemeForm = {
  feedback: ThemeFormFeedback
  input: ThemeFormInput
  select: ThemeFormSelect
  switch: ThemeFormSwitch
  radio: ThemeFormRadio
  checkbox: ThemeFormCheckbox
  chip: ThemeFormChip
}

// -----------------------------------

export type ThemeIcon = {
  size: {
    '2xl': number
    xl: number
    lg: number
    md: number
    sm: number
    xs: number
  }
}

export type ThemeButton = {
  glow: boolean
  border: {
    size: number
    focus: {
      size: number
    }
  }
  font: {
    family: string
    weight: number
    style: string
    size: {
      small: number
      regular: number
      big: number
    }
  }
}

export type BulletListCheck = {
  background?: string
  shadow?: string
  css?: (...args: any[]) => CssOutput
}

export type ThemeBulletList = {
  bullet: {
    [kind: string]: BulletListCheck
    // kind: info | success | warning | error
  }
}

export type ThemeLabel = {
  color: {
    primary: string
    secondary: string
  }
}

export type ThemeLogo = {
  img: string
  text: string
  gap?: string
}

export type ThemeNotification = {
  color: string
  background?: {
    [kind: string]: string
    // kind: success | warning | error
  }
}

export type ThemeTab = {
  color: {
    default: string
    active: string
    disabled: string
    label?: string
  }
}

export type ThemeTag = {
  color: {
    border: string
    text: string
    background: string
  }
}

export type RouterLinkVariant = {
  color: {
    default: string
    hover: string
    active: string
    disabled: string
  }
}

export type ThemeRouterLink = {
  variant: {
    1: RouterLinkVariant
    2: RouterLinkVariant
    3: RouterLinkVariant
  }
}

export type ThemeSidebar = {
  nav1: {
    background: string
    logo: {
      background?: string
      size: number
      padding: string
    }
    active: {
      background?: string
      background2?: string
    }
  }
  nav2: {
    color: string
    background: string
    title?: {
      color: string
    }
    progress: {
      color: string
    }
    toggle: {
      color: string
      background: string
    }
    active?: {
      color?: string
      background?: string
    }
  }
}

export type ThemeNavbar = {
  logoText: boolean
  mobile: {
    header: {
      background?: string
      shadow?: string
      css?: (...args: any[]) => CssOutput
      open?: {
        background: string
      }
    }
    content: {
      color: string
      background?: string
      shadow?: string
      css?: (...args: any[]) => CssOutput
      child: {
        background: string
        radius: number
      }
      active?: {
        color?: string
        background?: string
      }
    }
  }
}

export type NoisyContainer = {
  default: string
  borderRadius: number
}

export type ThemeComponent = {
  icon: ThemeIcon
  button: ThemeButton
  bulletList: ThemeBulletList
  label: ThemeLabel
  logo: ThemeLogo
  notification: ThemeNotification
  tab: ThemeTab
  tag: ThemeTag
  routerLink: ThemeRouterLink
  sidebar: ThemeSidebar
  navbar: ThemeNavbar
  noisyContainer: NoisyContainer
}

// -----------------------------------

export interface CoreTheme {
  name: string
  font: ThemeFont
  color: ThemeColor
  typo: ThemeTypo
  form: ThemeForm
  component: ThemeComponent
  gradient: ThemeGradient
  transition: ThemeTransition
  breakpoint: ThemeBreakpoint
  storybook: ThemeStorybookConfig
}
