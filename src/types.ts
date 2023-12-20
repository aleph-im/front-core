import { AnchorHTMLAttributes, ComponentType } from 'react'
import type { IconName } from './components/common/Icon'

export type Route = {
  href: string
  external?: boolean
  target?: HTMLAnchorElement['target']
  name?: string
  icon?: IconName
  flag?: number
  children?: Route[]
}

export type RenderLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  route: Route
}

export type LinkComponent = ComponentType<RenderLinkProps>
