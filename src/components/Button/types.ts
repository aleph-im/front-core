import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'text-only'
export type ButtonKind = 'neon' | 'flat'
export type ButtonSize = 'regular' | 'big'
export type ButtonTag = 'button' | 'a'

export type ButtonProps<T = any> = AnchorHTMLAttributes<T> & ButtonHTMLAttributes<T> & {
  children: React.ReactNode
  variant: ButtonVariant
  kind: ButtonKind
  size: ButtonSize
  color: string

  // Force states
  hover?: boolean
  active?: boolean
  focus?: boolean
  disabled?: boolean

  as?: ButtonTag
  className?: string
}

export type StyledButtonProps = {
  variant: ButtonVariant
  kind: ButtonKind
  size: ButtonSize
  color: string
}
