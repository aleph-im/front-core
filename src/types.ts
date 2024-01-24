import { AnchorHTMLAttributes, ComponentType, ImgHTMLAttributes } from 'react'
import type { IconName } from './components/common/Icon'

export type Route = {
  href: string
  external?: boolean
  target?: HTMLAnchorElement['target']
  name?: string
  icon?: IconName
  flag?: number
  exact?: boolean
  children?: Route[]
}

export type RenderLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  route: Route
}

export type LinkComponent = ComponentType<RenderLinkProps>

export type RenderImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
}

export type ImageComponent = ComponentType<RenderImageProps>
