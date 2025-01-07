import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { DefaultTheme } from 'styled-components'

export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonTag = 'button' | 'a'

export type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    kind?: string
    variant?: string
    size?: ButtonSize
    color?: string

    // Force states
    hover?: boolean
    active?: boolean
    focus?: boolean
    disabled?: boolean

    as?: ButtonTag
    className?: string

    animation?:
      | 'icon-to-right-on-hover'
      | 'icon-to-top-right-on-hover'
      | 'icon-to-top-on-hover'
  }

export type StyledButtonProps = {
  $kind: string
  $variant: string
  $size: ButtonSize
  $color: string
  $animation?: ButtonProps['animation']
} & { theme: DefaultTheme }
