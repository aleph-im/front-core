import { ReactNode } from 'react'
import { TypoKind } from '../../../themes'
import { IconName } from '../Icon/types'

export type TitlePositionProps = 'left' | 'center' | 'right'

export type TextProps = {
  color: string
  value: string
  size: number
}

export type TextActionProps = {
  position: TitlePositionProps
  content: string
  color: string
  type: TypoKind
  children?: ReactNode
  size: number
  icon: IconName
  useAction: () => void
}
