import React from 'react'
import { StoryFn } from '@storybook/react'

import WalletPicker from './cmp'
import { Network, Wallet, WalletPickerProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/modules/WalletPicker',
  component: WalletPicker,
  argTypes: {
    size: { control: 'text' },
  },
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
    id: 'ethereum',
    name: 'Ethereum',
    icon: 'ethereum',
    wallets,
  },
  {
    id: 'avalanche',
    name: 'Avalanche',
    icon: 'avalanche',
    wallets: [],
  },
  {
    id: 'solana',
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

const defaultArgs: Partial<WalletPickerProps> = {
  rewards: {
    amount: 1_000_000,
    days: 2,
  },
  networks,
  selectedNetwork: networks[0],
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
const Template: StoryFn<typeof WalletPicker> = (props: WalletPickerProps) => {
  return (
    <>
      <div tw="absolute top-0 left-0 ">
        <WalletPicker {...props} />
      </div>
      Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem
      ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum v v v Lorem
      ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum
      Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...defaultArgs,
  address: '0x50622138b35883F2e39Bf0C39eB9fa22214433Df',
  addressHref:
    'https://etherscan.io/address/0x50622138b35883F2e39Bf0C39eB9fa22214433Df',
  balance: Math.random() * 10 ** 8,
}
LoggedIn.parameters = {
  ...defaultParams,
}
