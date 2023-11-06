import { IconName as FAIconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type IconPrefix = 'fass' | 'far' | 'fab' | 'custom'
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string

export type CustomIconName =
  | 'avalanche'
  | 'binance'
  | 'ccn'
  | 'console'
  | 'cosmos'
  | 'crn'
  | 'earn'
  | 'ethereum'
  | 'explore'
  | 'notification'
  | 'polkadot'
  | 'polygon'
  | 'profile'
  | 'settings'
  | 'solana'
  | 'swap'
  | 'tezos'

export type IconName = CustomIconName | FAIconName

export interface IconProps extends Omit<FontAwesomeIconProps, 'icon' | 'size'> {
  name: IconName
  size?: IconSize
  prefix?: IconPrefix
  // className?: string
}
