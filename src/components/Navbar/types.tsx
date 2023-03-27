import { ReactNode } from "react"

export type NavbarProps = {
  logo?: ReactNode
  children?: ReactNode
}

export type ResponsiveNavBarProps = {
  isOpen?: boolean
}
