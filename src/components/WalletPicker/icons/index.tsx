import React, { memo } from 'react'
import MetamaskIcon from './metamask'
import Icon from '../../Icon'
import { IconName } from '../../Icon/types'

export type WalletIconName = 'metamask' | IconName

export type WalletIconProps = {
  name: WalletIconName
  color?: string
}

export const WalletIcon = ({ name, ...rest }: WalletIconProps) => {
  if (name === 'metamask') return <MetamaskIcon {...rest} />
  return <Icon name={name} {...rest} />
}

export default memo(WalletIcon)
