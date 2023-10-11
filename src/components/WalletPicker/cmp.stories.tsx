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

const connectToEthereum = async (provider: any) => {
  if (!provider) throw new Error('No provider found')

  try {
    const accounts = await provider.request({
      method: 'eth_requestAccounts',
    })
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x1' }],
    })

    return accounts[0]
  } catch (err) {
    console.log('An error has occured', err)
  }
}

const metamaskForETH: WalletProps = {
  name: 'Metamask',
  icon: 'circle',
  color: 'orange',
  provider: () => (window as any)?.ethereum,
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

const defaultArgs: Partial<PickerProps> = {
  size: 'regular',
  networks: [ethereum, bitcoin],
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
const Template: StoryFn<typeof WalletPicker> = ({
  size,
  networks,
}: PickerProps) => {
  const [address, setAddress] = React.useState<string | undefined>(undefined)
  const [balance, setBalance] = React.useState<number | undefined>(undefined)
  const [addressHref, setAddressHref] = React.useState<string | undefined>(
    undefined,
  )

  const onConnect = async (_chain: string, provider: any) => {
    const address = await connectToEthereum(provider)
    setAddress(address)
    setAddressHref('https://etherscan.io/address/' + address)
    setBalance(Math.random() * 10 ** 6)
  }

  const onDisconnect = () => {
    setAddress(undefined)
    setBalance(undefined)
  }

  return (
    <>
      <WalletPicker
        size={size}
        networks={networks}
        address={address}
        balance={balance}
        onConnect={onConnect}
        onDisconnect={onDisconnect}
        addressHref={addressHref}
      />
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
