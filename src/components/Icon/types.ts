import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type IconPrefix = 'fas' | 'far' | 'fab'
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface IconProps extends Omit<FontAwesomeIconProps, 'icon' | 'size'> {
  name: IconName
  size?: IconSize
  prefix?: IconPrefix
}
