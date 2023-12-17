import { LiHTMLAttributes, ReactNode } from 'react'
import { BreakpointId } from '../../../themes'

export type NavbarLinkProps = LiHTMLAttributes<HTMLLIElement> & {
  children: ReactNode
  level?: number
  breakpoint?: BreakpointId
}
