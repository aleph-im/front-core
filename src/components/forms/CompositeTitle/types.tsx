import { ElementType } from 'react'
import { TextGradientProps } from '../../common/TextGradient'

export type CompositeTitleProps = TextGradientProps & {
  number: number | string
  label?: string
  as?: ElementType
  color?: string
  numberColor?: string
  labelColor?: string
}
