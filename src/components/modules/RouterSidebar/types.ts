import { BreakpointId } from '../../../themes'
import { LinkComponent, Route } from '../../../types'
import { RouterLinkProps } from '../RouterLink'

export type RouterSidebarProps = {
  routes: Route[]
  pathname: string
  breakpoint: BreakpointId
  allowanceInfo?: {
    consumedSize: number
    allowedSize: number
  }
  Link: LinkComponent
}

export type RouteProps = RouterLinkProps & {
  level?: number
}
