import { BreakpointId } from '../../../themes'
import { LinkComponent, Route } from '../../../types'
import { LogoProps } from '../../common/Logo'
import { RouterLinkProps } from '../RouterLink'

export type RouterSidebarProps = {
  routes: Route[]
  pathname: string
  breakpoint: BreakpointId
  Link: LinkComponent
  open?: boolean
  logoHref?: string
  logoTarget?: string
  logoImg?: LogoProps['img']
  onToggle?: (open?: boolean) => void
  animationSpeed?: number
  animationSpeedOpeningMultiplier?: number
}

export type RouteProps = Omit<RouterLinkProps, 'isActive'> & {
  level?: number
  pathname: string
}
