import { AnchorHTMLAttributes, ReactNode } from 'react'
import { IconName } from '../../common/Icon'
import { BreakpointId } from '../../../themes'

export type Route = {
  name?: string
  path: string
  icon?: IconName
  flag?: number
  children?: Route[]
}

export type SidebarRenderLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children?: ReactNode
}

export type SidebarLinkProps = SidebarRenderLinkProps & {
  level?: number
  icon?: IconName
  flag?: number
  isOpen?: boolean
  isActive?: boolean
  Link: React.FC<SidebarRenderLinkProps>
}

export type SidebarProps = {
  routes: Route[]
  pathname: string
  breakpoint: BreakpointId
  allowanceInfo?: {
    consumedSize: number
    allowedSize: number
  }
  Link: React.FC<SidebarRenderLinkProps>
}
