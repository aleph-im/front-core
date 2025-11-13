import React from 'react'
import { StoryFn } from '@storybook/react'

import AccountPicker from './cmp'
import { AccountPickerProps, Blockchain } from './types'
import { Network } from './NetworkSelector'
import { Wallet } from './WalletSelector'
import { Voucher } from './AccountInformation'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/modules/AccountPicker',
  component: AccountPicker,
}

const wallets: Wallet[] = [
  {
    id: 'metamask',
    name: 'Metamask',
    icon: 'metamask',
    color: 'orange',
  },
  {
    id: 'wallet-connect',
    name: 'Wallet Connect',
    icon: 'walletConnect',
    color: 'main0',
  },
]

const networks: Network[] = [
  {
    id: 'ETH',
    name: 'Ethereum',
    icon: 'ethereum',
    wallets,
  },
  {
    id: 'AVAX',
    name: 'Avalanche',
    icon: 'avalanche',
    wallets,
  },
  {
    id: 'SOL',
    name: 'Solana',
    icon: 'solana',
    wallets: [],
  },
  {
    id: 'binance',
    name: 'Binance',
    icon: 'binance',
    wallets: [],
  },
  {
    id: 'polygon',
    name: 'Polygon',
    icon: 'polygon',
    wallets: [],
  },
  {
    id: 'tezos',
    name: 'Tezos',
    icon: 'tezos',
    wallets: [],
  },
  {
    id: 'cosmos',
    name: 'Cosmos',
    icon: 'cosmos',
    wallets: [],
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    icon: 'polkadot',
    wallets: [],
  },
]

const oneWalletNetworks: Network[] = [
  {
    id: 'ETH',
    name: 'Ethereum',
    icon: 'ethereum',
    wallets: [wallets[0]],
  },
  {
    id: 'AVAX',
    name: 'Avalanche',
    icon: 'avalanche',
    wallets: [wallets[0]],
  },
  {
    id: 'SOL',
    name: 'Solana',
    icon: 'solana',
    wallets: [wallets[0]],
  },
]
const blockchains: Record<Blockchain['id'], Blockchain> = {
  ['ETH']: {
    id: 'ETH',
    name: 'Ethereum',
    chainId: 1,
    eip155: true,
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io/',
    rpcUrl: 'https://eth.drpc.org',
  },
  ['AVAX']: {
    id: 'AVAX',
    name: 'Avalanche',
    chainId: 43114,
    eip155: true,
    currency: 'AVAX',
    explorerUrl: 'https://snowtrace.io/',
    rpcUrl: 'https://avalanche.drpc.org',
  },
  ['SOL']: {
    id: 'SOL',
    name: 'Solana',
    chainId: 900,
    eip155: false,
    currency: 'SOL',
  },
}

const vouchers: Voucher[] = [
  {
    name: 'Web3 Voucher',
    image: 'https://claim.twentysix.cloud/sbt/cover/web3-hosting.jpg',
    imageAlt: 'Web3 Hosting',
    amount: 7,
  },
  {
    name: 'Confidentials Voucher',
    image: 'https://claim.twentysix.cloud/sbt/cover/confidential-vm.jpg',
    imageAlt: 'Confidential VM',
    amount: 3,
  },
]

const handleConnect = async (wallet: Wallet, network: Network) => {
  alert(`Connect to ${network.name} via ${wallet.name}`)
}

const handleDisconnect = async () => {
  alert(`Disconnect`)
}

const handleSwitchNetwork = (network: Network) => {
  alert(`Switch to ${network.name}`)
}

const handleTopUpClick = () => {
  alert('Top Up clicked')
}

const defaultArgs: Partial<AccountPickerProps> = {
  blockchains,
  networks,
  selectedNetwork: networks[0],
  externalUrl: {
    text: 'Legacy console',
    url: '#',
  },
  handleConnect,
  handleDisconnect,
  handleSwitchNetwork,
  Link: (props) => <a {...props} />,
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qNnjyRzhXcmj6nwbL9XP5K/ALEPH-Cloud-Website?node-id=348-7734&t=IVMIjObqgGYaYXxn-0',
  },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof AccountPicker> = (props: AccountPickerProps) => {
  return (
    <div tw="flex justify-end py-6 px-12 mb-[30rem]">
      <AccountPicker {...props} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}

export const LoggedOff = Template.bind({})
LoggedOff.args = {
  ...defaultArgs,
}
LoggedOff.parameters = {
  ...defaultParams,
}

export const LoggedOffOneNetwork = Template.bind({})
LoggedOffOneNetwork.args = {
  ...defaultArgs,
  networks: [networks[0]],
}
LoggedOffOneNetwork.parameters = {
  ...defaultParams,
}

export const LoggedOffOneWallet = Template.bind({})
LoggedOffOneWallet.args = {
  ...defaultArgs,
  networks: oneWalletNetworks,
}
LoggedOffOneWallet.parameters = {
  ...defaultParams,
}

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...defaultArgs,
  accountAddress: '0x50622138b35883F2e39Bf0C39eB9fa22214433Df',
  accountCredits: Math.floor(Math.random() * 10 ** 4),
  accountBalance: Math.random() * 10 ** 8,
}
LoggedIn.parameters = {
  ...defaultParams,
}

export const LoggedInWithVouchers = Template.bind({})
LoggedInWithVouchers.args = {
  ...defaultArgs,
  accountAddress: '0x50622138b35883F2e39Bf0C39eB9fa22214433Df',
  accountCredits: Math.floor(Math.random() * 10 ** 4),
  accountBalance: Math.random() * 10 ** 8,
  accountVouchers: vouchers,
}
LoggedInWithVouchers.parameters = {
  ...defaultParams,
}

export const LoggedInWithCredits = Template.bind({})
LoggedInWithCredits.args = {
  ...defaultArgs,
  accountAddress: '0x50622138b35883F2e39Bf0C39eB9fa22214433Df',
  accountCredits: Math.floor(Math.random() * 10 ** 4),
  showCredits: true,
  accountBalance: Math.random() * 10 ** 8,
  disabledTopUp: false,
  handleTopUpClick,
}
LoggedInWithCredits.parameters = {
  ...defaultParams,
}

export const LoggedInOneNetwork = Template.bind({})
LoggedInOneNetwork.args = {
  ...defaultArgs,
  accountAddress: '0x50622138b35883F2e39Bf0C39eB9fa22214433Df',
  accountCredits: Math.floor(Math.random() * 10 ** 4),
  accountBalance: Math.random() * 10 ** 8,
  networks: [networks[0]],
}
LoggedInOneNetwork.parameters = {
  ...defaultParams,
}

export const LoggedOffMobile = Template.bind({})
LoggedOffMobile.args = {
  ...defaultArgs,
  isMobile: true,
}
LoggedOffMobile.parameters = {
  ...defaultParams,
}

export const LoggedOffMobileOneNetwork = Template.bind({})
LoggedOffMobileOneNetwork.args = {
  ...defaultArgs,
  isMobile: true,
  networks: [networks[0]],
}
LoggedOffMobileOneNetwork.parameters = {
  ...defaultParams,
}

export const LoggedInMobile = Template.bind({})
LoggedInMobile.args = {
  ...defaultArgs,
  accountAddress: '0x50622138b35883F2e39Bf0C39eB9fa22214433Df',
  accountCredits: Math.floor(Math.random() * 10 ** 4),
  accountBalance: Math.random() * 10 ** 8,
  isMobile: true,
}
LoggedInMobile.parameters = {
  ...defaultParams,
}

export const LoggedInMobileWithVouchers = Template.bind({})
LoggedInMobileWithVouchers.args = {
  ...defaultArgs,
  accountAddress: '0x50622138b35883F2e39Bf0C39eB9fa22214433Df',
  accountCredits: Math.floor(Math.random() * 10 ** 4),
  accountBalance: Math.random() * 10 ** 8,
  accountVouchers: vouchers,
  isMobile: true,
}
LoggedInMobileWithVouchers.parameters = {
  ...defaultParams,
}

export const LoggedInMobileWithCredits = Template.bind({})
LoggedInMobileWithCredits.args = {
  ...defaultArgs,
  accountAddress: '0x50622138b35883F2e39Bf0C39eB9fa22214433Df',
  accountCredits: Math.floor(Math.random() * 10 ** 4),
  accountBalance: Math.random() * 10 ** 8,
  showCredits: true,
  disabledTopUp: false,
  handleTopUpClick,
  isMobile: true,
}
LoggedInMobileWithCredits.parameters = {
  ...defaultParams,
}

export const LoggedInMobileOneNetwork = Template.bind({})
LoggedInMobileOneNetwork.args = {
  ...defaultArgs,
  accountAddress: '0x50622138b35883F2e39Bf0C39eB9fa22214433Df',
  accountCredits: Math.floor(Math.random() * 10 ** 4),
  accountBalance: Math.random() * 10 ** 8,
  isMobile: true,
  networks: [networks[0]],
}
LoggedInMobileOneNetwork.parameters = {
  ...defaultParams,
}
