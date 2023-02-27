export type NavbarProps = {
  withLabel?: boolean
  withLogo?: boolean
  navLinks?: React.ReactNode[]
  navButtons?: React.ReactNode[]

  className?: string
}

export type ResponsiveNavBarProps = {
  isOpen?: boolean
}

export type NavlinkProps = {
  withSlash?: boolean
}