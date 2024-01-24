import { IconName } from '../../common/Icon'
import { WalletIconName } from './icons'
import { HTMLAttributes } from 'react'

export type WalletProps = {
  name: string
  icon: WalletIconName
  color?: string
  provider: () => any
}

export type NetworkProps = {
  name: string
  icon: IconName
  wallets: WalletProps[]
}

export type WalletPickerProps = HTMLAttributes<HTMLDivElement> & {
  backgroundColor?: string
  networks: NetworkProps[]
  address?: string
  balance?: number
  onDisconnect: () => void
  onConnect: (wallet: WalletProps, network: NetworkProps) => void
  addressHref?: string
}
