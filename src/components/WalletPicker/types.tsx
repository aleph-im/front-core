import { IconName } from '@fortawesome/fontawesome-svg-core'
import { WalletIconName } from './icons'

export type PickerSize = 'regular' | 'big'

export type WalletProps = {
  name: string
  icon: WalletIconName
  color: string
  provider: () => any
}

export type NetworkProps = {
  name: string
  icon: IconName
  wallets: WalletProps[]
}

export type WalletPickerProps = {
  size: PickerSize
  backgroundColor?: string
  networks: NetworkProps[]
  address?: string
  balance?: number
  onDisconnect: () => void
  onConnect: (chain: string, provider: any) => void
  addressHref?: string
}

export type StyledPickerProps = {
  size: PickerSize
}
