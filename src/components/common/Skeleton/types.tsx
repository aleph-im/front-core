import { ThemeColor } from '../../../themes/types'

export type SkeletonProps = {
  width: string
  height?: string
  color?: keyof ThemeColor
}

export type StyledSkeletonProps = {
  $width?: string
  $height: string
  $color: keyof ThemeColor
}
