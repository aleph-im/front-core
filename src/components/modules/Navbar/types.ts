import { ReactNode } from 'react'
import { BreakpointId } from '../../../themes'

export type NavbarProps = {
  logo?: ReactNode
  children?: ReactNode
  mobileTopContent?: ReactNode
  height?: string
  breakpoint?: BreakpointId
  open?: boolean
  onToggle?: (open: boolean) => void
}

export type ResponsiveNavBarProps = {
  isOpen?: boolean
  height?: string
}
