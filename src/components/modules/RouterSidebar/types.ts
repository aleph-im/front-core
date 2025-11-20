import { BreakpointId } from '../../../themes'
import { LinkComponent, Route } from '../../../types'
import { LogoProps } from '../../common/Logo'
import { RouterLinkProps } from '../RouterLink'
import { IconProps } from '../../common/Icon'

export type FooterLink = {
  href: string
  icon?: IconProps['name']
  label?: string
  target?: string
  rel?: string
}

export type FooterLinks = {
  main?: FooterLink
  social?: FooterLink[]
}

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
  footerLinks?: FooterLinks
}

export type RouteProps = Omit<RouterLinkProps, 'isActive'> & {
  level?: number
  pathname: string
}
