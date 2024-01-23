import React from 'react'
import { StoryFn } from '@storybook/react'

import WalletPicker from './cmp'
import { WalletPickerProps, WalletProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/modules/WalletPicker',
  component: WalletPicker,
  argTypes: {
    size: { control: 'text' },
  },
}

const metamaskForETH: WalletProps = {
  name: 'Metamask',
  icon: 'metamask',
  color: 'orange',
  provider: () => (window as any)?.ethereum,
}

const defaultArgs: Partial<WalletPickerProps> = {
  networks: [
    {
      name: 'Ethereum',
      icon: 'ethereum',
      wallets: [metamaskForETH],
    },
    {
      name: 'Avalanche',
      icon: 'avalanche',
      wallets: [],
    },
    {
      name: 'Solana',
      icon: 'solana',
      wallets: [],
    },
    {
      name: 'Binance',
      icon: 'binance',
      wallets: [],
    },
    {
      name: 'Polygon',
      icon: 'polygon',
      wallets: [],
    },
    {
      name: 'Tezos',
      icon: 'tezos',
      wallets: [],
    },
    {
      name: 'Cosmos',
      icon: 'cosmos',
      wallets: [],
    },
    {
      name: 'Polkadot',
      icon: 'polkadot',
      wallets: [],
    },
  ],
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
