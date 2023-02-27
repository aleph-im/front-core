export type BreakpointId = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
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
  | 'code'
  | 'code1'
  | 'form'
export type Typo = {
  tag: boolean
  size: number
  family: string
  weight: number
  style: string
  lineHeight: number
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
  main2: Gradient

  extra0: Gradient
  extra1: Gradient
}

export type ThemeColor = {
  [k: string]: string

  base0: string
  base1: string
  base2: string

  main0: string
  main1: string
  main2: string

  success: string
  warn: string
  error: string

  background: string
  contentBackground: string
  foreground: string
  text: string
}

export type ThemeFont = {
  url: string
  size: {
    xxl: number
    xl: number
    lg: number
    md: number
    sm: number
    xs: number
    xxs: number
  }
  family: {
    head: string
    body: string
    code: string
  }
}

export type ThemeButton = {
  font: {
    family: string
    weight: number
    style: string
    size: {
      regular: number
      big: number
    }
  }
}

export type ThemeIcon = {
  size: {
    xl: number
    lg: number
    md: number
    sm: number
    xs: number
  }
}
export interface CoreTheme {
  name: string
  // palette: Record<string, string[]>
  font: ThemeFont
  color: ThemeColor
  typo: ThemeTypo
  icon: ThemeIcon
  button: ThemeButton
  gradient: ThemeGradient
  breakpoint: ThemeBreakpoint
}
