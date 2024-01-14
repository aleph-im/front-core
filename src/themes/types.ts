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

export type ThemeFormRadio = {
  disabledType?: 'opacity' | 'grayscale'
  shadow?: string
  background: string
  dot: {
    background?: string
    checked: {
      background: Gradient
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
  radio: ThemeFormRadio
  checkbox: ThemeFormCheckbox
  chip: ThemeFormChip
}

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

export type ThemeTransition = {
  duration: {
    slow: number
    normal: number
    fast: number
  }
  timing: string
}

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

export interface CoreTheme {
  name: string
  font: ThemeFont
  color: ThemeColor
  typo: ThemeTypo
  icon: ThemeIcon
  form: ThemeForm
  button: ThemeButton
  gradient: ThemeGradient
  transition: ThemeTransition
  breakpoint: ThemeBreakpoint
  storybook: ThemeStorybookConfig
}
