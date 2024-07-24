import { ReactNode, RefObject } from 'react'
import { FloatPosition, FloatPositionType } from '../../../hooks'

export type TooltipPositionType = FloatPositionType
export type TooltipPosition = FloatPosition
export type TooltipVariant = 1 | 2

export type TooltipProps = {
  my: TooltipPositionType
  at: TooltipPositionType
  margin?: TooltipPosition
  offset?: TooltipPosition

  closeDelay?: number
  closeButton?: boolean

  open?: boolean
  content?: ReactNode
  variant?: TooltipVariant

  onOpen?: () => void
  onClose?: () => void
  onCloseClick?: () => void
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
