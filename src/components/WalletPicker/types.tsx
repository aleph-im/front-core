import { IconName } from '@fortawesome/fontawesome-svg-core'

export type PickerSize = 'regular' | 'big'

export type WalletProps = {
  name: string
  icon: IconName
  color: string
  provider: () => any
}

export type NetworkProps = {
  name: string
  icon: IconName
  wallets: WalletProps[]
}

export type PickerProps = {
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
  backgroundColor: string
}
