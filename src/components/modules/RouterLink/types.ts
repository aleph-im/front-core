import { AnchorHTMLAttributes } from 'react'
import { LinkComponent, Route } from '../../../types'

export type RouterLinkVariant = '1' | '2' | '3'

export type RouterLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  route: Route
  Link: LinkComponent
  isActive: boolean
  disabled?: boolean
  variant?: RouterLinkVariant
}
