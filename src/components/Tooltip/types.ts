import { ReactNode, RefObject } from 'react'
import { FloatPosition, FloatPositionType } from '../../hooks'

export type TooltipPositionType = FloatPositionType
export type TooltipPosition = FloatPosition

export type TooltipProps = {
  my: TooltipPositionType
  at: TooltipPositionType
  margin?: TooltipPosition
  offset?: TooltipPosition

  closeDelay?: number

  open?: boolean
  header?: ReactNode
  content?: ReactNode

  onOpen?: () => void
  onClose?: () => void
  onCloseClick?: () => void

  containerRef?: Element | DocumentFragment
} & (
  | {
      children: ReactNode & { ref?: RefObject<any> }
      targetRef?: RefObject<any>
    }
  | {
      children?: ReactNode & { ref?: RefObject<any> }
      targetRef: RefObject<any>
    }
)
