import { ReactNode } from "react"
import { BreakpointId } from "../../themes"

export type NavbarLinkListProps = {
  children: ReactNode
  withSlash?: boolean
  onlyMobile?: boolean
  onlyDesktop?: boolean
  mobileDirection?: 'row' | 'column'
  desktopDirection?: 'row' | 'column'
  collapsible?: BreakpointId
}
