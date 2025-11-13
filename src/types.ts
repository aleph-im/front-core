import { AnchorHTMLAttributes, ComponentType, ImgHTMLAttributes } from 'react'
import type { CSSProp } from 'styled-components'
import type { IconName } from './components/common/Icon'

/**
 * Utility type for adding styled-components props to component types.
 * Provides `as`, `forwardedAs`, and `css` props with optional type constraints.
 *
 * @template TAs - Type constraint for `as` and `forwardedAs` props (defaults to string | Element)
 *
 * @example
 * // With type constraint
 * type ButtonProps = WithStyledProps<'button' | 'a'> & { ... }
 *
 * @example
 * // Without constraint (accepts any element)
 * type GenericProps = WithStyledProps & { ... }
 */
export type WithStyledProps<TAs = string | Element> = {
  as?: TAs
  forwardedAs?: TAs
  css?: CSSProp
}

export type Route = {
  href: string
  external?: boolean
  highlighted?: boolean
  target?: HTMLAnchorElement['target']
  name?: string
  icon?: IconName
  label?: string
  flag?: number
  exact?: boolean
  disabled?: boolean
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
