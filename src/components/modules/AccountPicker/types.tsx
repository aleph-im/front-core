import { RefObject } from 'react'
import { Network } from './NetworkSelector'
import { Wallet } from './WalletSelector'
import { NetworkSelectorProps } from './NetworkSelector/types'
import { AccountInformationProps } from './AccountInformation'

export type Blockchain = {
  id: string
  name: string
  chainId: number
  eip155: boolean
  currency: string
  explorerUrl?: string
  rpcUrl?: string
}

export type AccountPickerProps = {
  isMobile?: boolean
  accountAddress?: string
  accountBalance?: number
  ensName?: string
  rewards?: AccountInformationProps['rewards']
  blockchains: Record<Blockchain['id'], Blockchain>
  networks: Network[]
  selectedNetwork: Network
  handleSwitchNetwork: NetworkSelectorProps['onSelectNetwork']
  handleConnect: (wallet: Wallet, network: Network) => void
  handleDisconnect: () => void
}

export type UseAccountPickerProps = Pick<
  AccountPickerProps,
  | 'accountAddress'
  | 'accountBalance'
  | 'ensName'
  | 'rewards'
  | 'blockchains'
  | 'networks'
  | 'selectedNetwork'
  | 'handleSwitchNetwork'
  | 'handleConnect'
  | 'handleDisconnect'
>

export type UseAccountPickerReturn = Omit<
  UseAccountPickerProps,
  'blockchains'
> & {
  accountAddressHref: string
  oneNetwork: boolean
  isConnected: boolean
  displayWalletPicker: boolean
  walletPickerOpen: boolean
  walletPickerRef: RefObject<HTMLDivElement>
  walletPickerTriggerRef: RefObject<HTMLButtonElement>
  walletPosition: { x: number; y: number }
  handleDisplayWalletPicker: () => void
  displayNetworksPicker: boolean
  networksPickerOpen: boolean
  networksPickerRef: RefObject<HTMLDivElement>
  networksPickerTriggerRef: RefObject<HTMLButtonElement>
  networksPosition: { x: number; y: number }
  handleDisplayNetworksPicker: () => void
  displayCondensedPicker: boolean
  condensedPickerOpen: boolean
  condensedPickerRef: RefObject<HTMLDivElement>
  condensedPickerTriggerRef: RefObject<HTMLButtonElement>
  condensedPosition: { x: number; y: number }
  handleDisplayCondensedPicker: () => void
}
