import { BreakpointId } from '../../../themes'
import { LinkComponent, Route } from '../../../types'
import { RouterLinkProps } from '../RouterLink'

export type RouterSidebarProps = {
  routes: Route[]
  pathname: string
  breakpoint: BreakpointId
  Link: LinkComponent
  open?: boolean
  logoHref?: string
  logoTarget?: string
  onToggle?: (open?: boolean) => void
}

export type RouteProps = Omit<RouterLinkProps, 'isActive'> & {
  level?: number
  pathname: string
}
