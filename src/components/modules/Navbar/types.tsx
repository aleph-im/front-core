import { ReactNode } from 'react'

export type NavbarProps = {
  logo?: ReactNode
  children?: ReactNode
  mobileTopContent?: ReactNode
  height?: string
  open?: boolean
  onToggle?: (open: boolean) => void
}

export type ResponsiveNavBarProps = {
  isOpen?: boolean
  height?: string
}
