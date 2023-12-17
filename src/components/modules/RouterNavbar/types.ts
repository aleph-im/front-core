import { LinkComponent, Route } from '../../../types'
import type { NavbarProps } from '../Navbar'
import { BreakpointId } from '../../../themes'
import { RouterLinkProps } from '../RouterLink'

export type RouterNavbarProps = Omit<NavbarProps, 'children'> & {
  routes: Route[]
  breakpoint: BreakpointId
  pathname: string
  Link: LinkComponent
}

export type RouteProps = RouterLinkProps & {
  breakpoint: BreakpointId
  level?: number
  pathname: string
}
