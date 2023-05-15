import React, { useState } from 'react'
import { Col, Row } from '../Grid'
import Button from '../Button'
import Icon from '../Icon'
import { StyledPicker, WalletPickerText } from './styles'
import { NetworkProps, PickerProps, WalletProps } from './types'

export const WalletPicker = ({
  size,
  backgroundColor = '#222134',
  networks,
}: PickerProps) => {
  const [currentNetwork, setCurrentNetwork] = useState<NetworkProps>()
  const [account, setAccount] = useState<string>('')

  const handleClick = (network: NetworkProps) => {
    setCurrentNetwork(network)
  }

  const handleConnect = async (wallet: WalletProps) => {
    try {
      const account = await wallet.callback()
      setAccount(account)
    } catch (e: any) {
      console.log('An error has occured', e)
    }
  }

  const slicedAccount = () => {
    return `${account?.slice(0, 4)}...${account?.slice(-4)}`
  }

  return (
    <StyledPicker
      {...{
        size,
        backgroundColor,
      }}
    >
      <div>
        <WalletPickerText {...{ size, backgroundColor }}>
          1. Choose your network
        </WalletPickerText>
        <Row count={4}>
          {networks.map((network) => (
            <Col key={network.name}>
              <div
                style={{
                  display: 'block',
                  textAlign: 'center',
                  flexDirection: 'column',
                }}
              >
                <Button
                  onClick={() => handleClick(network)}
                  disabled={network.wallets.length === 0}
                  size="big"
                  kind={currentNetwork?.name === network.name ? 'neon' : 'flat'}
                  color={
                    currentNetwork?.name === network.name ? 'main0' : 'white'
                  }
                  variant={
                    currentNetwork?.name === network.name
                      ? 'tertiary'
                      : 'secondary'
                  }
                >
                  <Icon
                    name={network.icon}
                    size={size == 'regular' ? 'md' : 'xl'}
                  ></Icon>
                </Button>
                <div
                  style={{
                    fontSize: '10px',
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  {network.name}
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <WalletPickerText {...{ size, backgroundColor }}>
          2. Connect your wallet
        </WalletPickerText>
        <Row count={1}>
          {currentNetwork?.wallets?.map((wallet: { [key: string]: any }) => (
            <Col key={wallet.name}>
              <div style={{ display: 'block', textAlign: 'center' }}>
                <Button
                  onClick={() => handleConnect(wallet)}
                  as="button"
                  variant="tertiary"
                  color="main0"
                  kind="neon"
                  size={size}
                >
                  {account.length === 0 ? wallet.name : slicedAccount()}
                  <Icon
                    style={{ margin: '0 10px' }}
                    name={wallet.icon}
                    color={wallet.color}
                  ></Icon>
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </StyledPicker>
  )
}

WalletPicker.displayName = 'WalletPicker'

export default WalletPicker
