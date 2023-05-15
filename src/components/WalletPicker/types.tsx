import { IconName } from '@fortawesome/fontawesome-svg-core'

export type PickerSize = 'regular' | 'big'

export type WalletProps = {
  name: string
  icon: IconName
  color: string
  callback: any
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
}

export type StyledPickerProps = {
  size: PickerSize
  backgroundColor: string
}
