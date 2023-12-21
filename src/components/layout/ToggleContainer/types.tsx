import { HTMLAttributes, ReactNode } from 'react'

export type ToggleContainerVariant = '1' | '2'

export type ToggleContainerProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
  open: boolean
  duration?: number
  variant?: ToggleContainerVariant
}
