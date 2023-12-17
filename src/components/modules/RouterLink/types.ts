import { LinkComponent, RenderLinkProps, Route } from '../../../types'

export type RouterLinkVariant = '1' | '2' | '3'

export type RouterLinkProps = RenderLinkProps & {
  route: Route
  isActive?: boolean
  disabled?: boolean
  variant?: RouterLinkVariant
  Link: LinkComponent
}
