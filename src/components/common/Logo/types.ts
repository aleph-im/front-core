import { LinkComponent } from '../../../types'

export type LogoProps = {
  img?: 'aleph' | 'twentysix' | 'accelerator'
  size?: number | string
  color?: string
  text?: boolean | string
  bgColor?: string
  byAleph?: boolean
  Link?: LinkComponent
  href?: string
  target?: string
}

export type StyledLogoProps = {
  size?: number | string
  text?: boolean | string
}

export type StyledLogoSvgProps = {
  color: string
  color2?: string
  bgColor?: string
}
