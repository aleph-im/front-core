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
  containerRef?: HTMLElement | undefined
  children?: ReactNode
  logoHref?: string
}

export type RouteProps = Omit<RouterLinkProps, 'isActive'> & {
  breakpoint: BreakpointId
  variant?: string
  level?: number
  pathname: string
  exact?: boolean
}

export type ParentRouteProps = RouteProps
