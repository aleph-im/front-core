export type TypoSizeKind = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TypoSize = Record<TypoSizeKind, number>

export type TypoKind = 'header' | 'body' | 'body2' | 'body3' | 'code' | 'code2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7'
export type Typo = {
  size: number,
  family: string
  weight: number
  style: string
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
    xl: number
    lg: number
    md: number
    sm: number
    xs: number
  }
  family: {
    head: string
    body: string
    code: string
  }
}

export type ThemeButton = {
  size: {
    regular: number
    big: number
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
  color: ThemeColor,
  typo: ThemeTypo
  icon: ThemeIcon
  button: ThemeButton
  gradient: ThemeGradient
  effect: any
}

