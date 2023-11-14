import { ElementType } from 'react'
import { TextGradientProps } from '../../common/TextGradient'
import { TypoKind } from '../../../themes'

export type CompositeTitleProps = TextGradientProps & {
  number: number | string
  color?: string
  label?: string
  as?: ElementType
  disabled?: boolean
}

export type LabelProps = {
  type: TypoKind
}
