import { LinkComponent, Route } from '../../../types'
import type { NavbarProps } from '../Navbar'
import { BreakpointId } from '../../../themes'
import { RouterLinkProps } from '../RouterLink'
import { ReactNode } from 'react'

export type RouterNavbarProps = NavbarProps & {
  routes: Route[]
  breakpoint: BreakpointId
  pathname: string
  Link: LinkComponent
  children?: ReactNode
}

export type RouteProps = Omit<RouterLinkProps, 'isActive'> & {
  breakpoint: BreakpointId
  level?: number
  pathname: string
}

export type ParentRouteProps = RouteProps
