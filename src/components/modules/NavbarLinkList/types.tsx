import { HTMLAttributes, ReactNode } from 'react'
import { BreakpointId } from '../../../themes'

export type NavbarLinkListProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  withSlash?: boolean
  onlyMobile?: boolean
  onlyDesktop?: boolean
  mobileDirection?: 'row' | 'column'
  desktopDirection?: 'row' | 'column'
  mobileGap?: boolean
  desktopGap?: boolean
  collapsible?: BreakpointId
}
