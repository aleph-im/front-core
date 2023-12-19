import { LinkComponent, RenderLinkProps, Route } from '../../../types'

export type RouterLinkVariant = '1' | '2' | '3'

export type RouterLinkProps = RenderLinkProps & {
  route: Route
  Link: LinkComponent
  isActive: boolean
  disabled?: boolean
  variant?: RouterLinkVariant
}
