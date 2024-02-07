import { HTMLAttributes } from 'react'
import { IconName } from '../../common/Icon'
import { LinkComponent } from '../../../types'
import { BreakpointId } from '../../../themes'

export type FooterMedia = {
  icon: IconName
  name: string
  label: string
  href: string
  target?: string
  small?: boolean
}

export type FooterButton = {
  label: string
  href: string
  target?: string
}

export type FooterLink = {
  label: string
  href: string
  target?: string
}

export type FooterLinkList = {
  title?: string
  links: FooterLink[]
}

export type FooterProps = HTMLAttributes<HTMLElement> & {
  small?: boolean
  maxWidth?: string
  buttons: FooterButton[]
  media: FooterMedia[]
  links: FooterLinkList[]
  mainLinks: FooterLink[]
  Link: LinkComponent
  logoHref?: string
  logoTarget?: string
  breakpoint?: BreakpointId
}
