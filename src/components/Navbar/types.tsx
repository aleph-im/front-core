import { ReactNode } from "react"

export type NavbarProps = {
  logo?: ReactNode
  children?: ReactNode
  height?: string
}

export type ResponsiveNavBarProps = {
  isOpen?: boolean
  height?: string
}
