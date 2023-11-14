import { HTMLAttributes, ReactNode } from 'react'

export type ToggleContainerProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
  open: boolean
  duration?: number
}
