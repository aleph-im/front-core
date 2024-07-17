import { AnchorHTMLAttributes } from 'react'
import { LinkComponent, Route } from '../../../types'

export type RouterLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  route: Route
  Link: LinkComponent
  isActive: boolean
  disabled?: boolean
  variant?: string
  iconPosition?: 'left' | 'right' | 'top' | 'bottom'
}
