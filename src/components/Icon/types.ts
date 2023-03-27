import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type IconPrefix = 'fass' | 'far' | 'fab'
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string

export interface IconProps extends Omit<FontAwesomeIconProps, 'icon' | 'size'> {
  name: IconName
  size?: IconSize
  prefix?: IconPrefix
  // className?: string
}
