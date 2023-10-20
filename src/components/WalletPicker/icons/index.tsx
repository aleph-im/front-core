import React, { memo } from 'react'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import MetamaskIcon from './metamask'
import Icon from '../../Icon'

export type WalletIconName = 'metamask' | IconName

export type WalletIconProps = {
  name: WalletIconName
  color?: string
}

export const WalletIcon = memo(({ name, ...rest }: WalletIconProps) => {
  if (name === 'metamask') return <MetamaskIcon {...rest} />
  return <Icon name={name} {...rest} />
})
WalletIcon.displayName = 'WalletIcon'

export default WalletIcon
