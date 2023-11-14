import { HTMLAttributes, ReactNode } from 'react'
import { Typo, TypoKind } from '../../../themes/types'

export type TypeElements =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'header'
  | 'nav'
  | 'body'
  | 'code'
  | 'form'
  | 'span'
  | 'strong'

export type TextGradientProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  size?: number | string
  color?: string
  type?: TypoKind
  className?: string
  as?: TypeElements
}

export type StyledTextGradientProps = {
  size?: number | string
  color: string
  type: TypoKind
  typo: Typo
  as: TypeElements
  $isInline: boolean
}
