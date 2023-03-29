import { ReactNode, RefObject } from "react"

export type TooltipPositionType =
  | 'top-left' | 'top-center' | 'top-right'
  | 'center-left' | 'center-center' | 'center-right'
  | 'bottom-left' | 'bottom-center' | 'bottom-right'

export type TooltipPosition = { x: number, y: number }

export type TooltipProps = {
  children: ReactNode & { ref?: RefObject<any> }

  my: TooltipPositionType
  at: TooltipPositionType
  margin?: TooltipPosition
  offset?: TooltipPosition

  isOpen?: boolean
  header?: ReactNode
  content?: ReactNode
}
