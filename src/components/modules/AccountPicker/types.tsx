import { RefObject } from 'react'
import { Network } from './NetworkSelector'
import { Wallet } from './WalletSelector'
import { NetworkSelectorProps } from './NetworkSelector/types'
import { AccountInformationProps, Voucher } from './AccountInformation'
import { LinkComponent } from '../../../types'

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
  Link: LinkComponent
  isMobile?: boolean
  showCredits?: boolean
  accountAddress?: string
  accountCredits?: number
  accountBalance?: number
  accountVouchers?: Voucher[]
  ensName?: string
  rewards?: AccountInformationProps['rewards']
  blockchains: Record<Blockchain['id'], Blockchain>
  networks: Network[]
  selectedNetwork: Network
  disabledTopUp?: boolean
  handleTopUpClick?: () => void
  externalUrl: {
    text: string
    url: string
  }
  handleSwitchNetwork: NetworkSelectorProps['onSelectNetwork']
  handleConnect: (wallet: Wallet, network: Network) => void
  handleDisconnect: () => void
}

export type UseAccountPickerProps = Pick<
  AccountPickerProps,
  | 'accountAddress'
  | 'accountCredits'
  | 'accountBalance'
  | 'ensName'
  | 'rewards'
  | 'blockchains'
  | 'networks'
  | 'selectedNetwork'
  | 'externalUrl'
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
  networksPickerTriggerRef: RefObject<HTMLDivElement>
  networksPosition: { x: number; y: number }
  handleDisplayNetworksPicker: () => void
  displayCondensedPicker: boolean
  condensedPickerOpen: boolean
  condensedPickerRef: RefObject<HTMLDivElement>
  condensedPickerTriggerRef: RefObject<HTMLButtonElement>
  condensedPosition: { x: number; y: number }
  handleDisplayCondensedPicker: () => void
}
