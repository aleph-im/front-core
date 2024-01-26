import { HTMLAttributes } from 'react'
import { IconName } from '../../common/Icon'
import { LinkComponent } from '../../../types'

export type FooterMedia = {
  icon: IconName
  name: string
  label: string
  href: string
  small?: boolean
}

export type FooterButton = {
  label: string
  href: string
}

export type FooterLink = {
  label: string
  href: string
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
}
