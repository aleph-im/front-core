import { ReactNode } from 'react'

export type RowProps = StyledRowProps & {
  children: ReactNode
}

export type ColProps = StyledColProps & {
  children: ReactNode
}

export type StyledRowProps = {
  count?: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  '2xl'?: number

  gap?: string | number
  xsGap?: string | number
  smGap?: string | number
  mdGap?: string | number
  lgGap?: string | number
  xlGap?: string | number
  '2xlGap'?: string | number
}

export type StyledColProps = {
  span?: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  '2xl'?: number

  offset?: number
  xsOffset?: number
  smOffset?: number
  mdOffset?: number
  lgOffset?: number
  xlOffset?: number
  '2xlOffset'?: number
}
