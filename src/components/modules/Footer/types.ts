import { HTMLAttributes } from 'react'

export type FooterProps = HTMLAttributes<HTMLElement> & {
  small?: boolean
  maxWidth?: string
}
