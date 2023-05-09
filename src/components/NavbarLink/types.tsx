import { LiHTMLAttributes, ReactNode } from 'react'

export type NavbarLinkProps = LiHTMLAttributes<HTMLLIElement> & {
  children: ReactNode
  isActive?: boolean
}
