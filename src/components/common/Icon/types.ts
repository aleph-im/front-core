import { IconName as FAIconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type IconPrefix = 'fass' | 'far' | 'fab' | 'custom'
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string

export type CustomIconName =
  | 'aleph'
  | 'avalanche'
  | 'base'
  | 'binance'
  | 'ccn'
  | 'console'
  | 'cosmos'
  | 'crn'
  | 'earn'
  | 'ethereum'
  | 'explore'
  | 'gpu'
  | 'notification'
  | 'permissions'
  | 'phantom'
  | 'polkadot'
  | 'polygon'
  | 'profile'
  | 'settings'
  | 'solana'
  | 'swap'
  | 'tezos'
  | 'walletConnect'
  | 'storageSolutions'
  | 'computeSolutions'
  | 'web3HostingBox'
  | 'dashboard'
  | 'functions'
  | 'instance'
  | 'confidential'
  | 'manageWebsite'
  | 'usdc'

export type IconName = CustomIconName | FAIconName

export interface IconProps extends Omit<FontAwesomeIconProps, 'icon' | 'size'> {
  name: IconName
  size?: IconSize
  prefix?: IconPrefix
  gradient?: string
  // className?: string
}
