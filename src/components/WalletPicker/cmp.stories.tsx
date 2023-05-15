import React from 'react'
import { StoryFn } from '@storybook/react'

import WalletPicker from './cmp'
import { PickerProps, NetworkProps, WalletProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/WalletPicker',
  component: WalletPicker,
  argTypes: {
    size: { control: 'text' },
  },
}

const connectToEthereum = async () => {
  if (typeof window?.ethereum === 'undefined') {
    console.log('MetaMask is not installed!')
  }
  try {
    const accounts = await window?.ethereum.request({
      method: 'eth_requestAccounts',
    })
    await window?.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x1' }],
    })
    return accounts[0]
  } catch (err) {
    console.log('An error was occured', err)
  }
}

const metamaskForETH: WalletProps = {
  name: 'Metamask',
  icon: 'circle',
  color: 'orange',
  callback: connectToEthereum,
}

const ethereum: NetworkProps = {
  name: 'Ethereum',
  icon: 'ethereum',
  wallets: [metamaskForETH],
}

const bitcoin: NetworkProps = {
  name: 'Bitcoin',
  icon: 'bitcoin',
  wallets: [],
}

const networks: NetworkProps[] = [ethereum, bitcoin]

const defaultArgs: Partial<PickerProps> = {
  size: 'regular',
  networks: networks,
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
const Template: StoryFn<typeof WalletPicker> = (args) => (
  <>
    <WalletPicker {...args} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}
