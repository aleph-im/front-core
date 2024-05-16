import { IconName } from '../../common/Icon'
import { WalletIconName } from './icons'
import { HTMLAttributes } from 'react'

export type Wallet = {
  id: string
  name: string
  icon: WalletIconName
  color?: string
}

export type Network = {
  id: string
  name: string
  icon: IconName
  wallets: Wallet[]
}

export type WalletPickerProps = HTMLAttributes<HTMLDivElement> & {
  backgroundColor?: string
  networks: Network[]
  address?: string
  addressHref?: string
  balance?: number
  rewards?: {
    amount: number
    days?: number
  }
  selectedNetwork?: Network
  onConnect: (wallet: Wallet, network: Network) => void
  onSwitchNetwork: (network: Network) => void
  onDisconnect: () => void
}

export type NetworkProps = {
  network: Network
  isSelected: boolean
  onClick: (network: Network) => void
}

export type NetworksProps = {
  networks: Network[]
  selectedNetwork?: Network
  onSelectNetwork: (network: Network) => void
}

export type WalletPickerLoggedOutProps = {
  networks: Network[]
  onConnect: (wallet: Wallet, network: Network) => void
}

export type WalletPickerLoggedInProps = {
  networks: Network[]
  address?: string
  addressHref?: string
  balance?: number
  rewards?: {
    amount: number
    days?: number
  }
  selectedNetwork?: Network
  onSwitchNetwork: (network: Network) => void
  onDisconnect: () => void
}
