import { ReactNode } from 'react'
import { BreakpointId } from '../../../themes'

export type NavbarProps = {
  logo?: ReactNode
  children?: ReactNode
  mobileTopContent?: ReactNode
  height?: string
  open?: boolean
  breakpoint?: BreakpointId
  onToggle?: (open: boolean) => void
}

export type ResponsiveNavBarProps = {
  isOpen?: boolean
  height?: string
}
