import { HTMLAttributes } from 'react'
import { IconName } from '../../common/Icon'
import { LinkComponent } from '../../../types'
import { BreakpointId } from '../../../themes'
import { ButtonProps } from '../../common/Button'
import { LogoProps } from '../../common/Logo'

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
  props?: Partial<ButtonProps>
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

export type FooterCommonProps = HTMLAttributes<HTMLElement> & {
  small?: boolean
  maxWidth?: string
  buttons: FooterButton[]
  media: FooterMedia[]
  links: FooterLinkList[]
  mainLinks: FooterLink[]
  Link?: LinkComponent
  logoHref?: string
  logoTarget?: string
  logoImg?: LogoProps['img']
  logoByAleph?: LogoProps['byAleph']
  logoText?: LogoProps['text']
  breakpoint?: BreakpointId
}

export type FooterProps =
  | (FooterCommonProps & {
      small: true
      buttons?: FooterButton[]
      links?: FooterLinkList[]
    })
  | (FooterCommonProps & {
      small?: false
      buttons: FooterButton[]
      links: FooterLinkList[]
    })
