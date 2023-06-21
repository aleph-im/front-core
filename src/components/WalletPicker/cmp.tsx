import React, { useMemo, useState } from 'react'
import { Col, Row } from '../Grid'
import Button from '../Button'
import Icon from '../Icon'
import { BottomBorderedDiv, StyledPicker, WalletPickerText } from './styles'
import { NetworkProps, PickerProps } from './types'
import { Logo } from '../Logo'

export const WalletPicker = ({
  size,
  backgroundColor = '#222134',
  networks,
  address,
  balance,
  onConnect,
  onDisconnect,
  addressHref,
}: PickerProps) => {
  const displayAddress = useMemo(
    () => `${address?.slice(0, 8)}...${address?.slice(-6)}`,
    [address],
  )

  const displayBalance = useMemo(() => {
    if (!balance) return '0.00'
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(
      balance,
    )
  }, [balance])

  const [currentNetwork, setCurrentNetwork] = useState<NetworkProps>()

  const handleClick = (network: NetworkProps) => {
    setCurrentNetwork(network)
  }

  return (
    <StyledPicker
      {...{
        size,
        backgroundColor,
      }}
    >
      {address ? (
        <>
          <BottomBorderedDiv tw="pb-8">
            <Row count={4}>
              <Col>
                <Logo color="white" size="3.2rem" text="" />
              </Col>
              <Col span={3}>
                <div style={{ lineHeight: '2px' }}>
                  <div className="tp-code1 fs-xl">{displayBalance}</div>
                  <p className="fs-sm m-0">ALEPH</p>
                </div>
              </Col>
            </Row>
          </BottomBorderedDiv>

          <BottomBorderedDiv tw="py-8 text-center">
            {addressHref ? (
              <Button
                color="main0"
                variant="tertiary"
                kind="neon"
                size="regular"
                href={addressHref}
                as="a"
                target="_blank"
              >
                {displayAddress}&nbsp;
                <Icon name="external-link-square" />
              </Button>
            ) : (
              displayAddress
            )}
          </BottomBorderedDiv>

          <div tw="py-8 text-center">
            <Button
              color="main2"
              variant="tertiary"
              kind="neon"
              size="regular"
              onClick={onDisconnect}
            >
              Logout
            </Button>
          </div>
        </>
      ) : (
        <div>
          <WalletPickerText {...{ size, backgroundColor }}>
            1. Choose your network
          </WalletPickerText>
          <Row count={4}>
            {networks.map((network) => (
              <Col key={network.name}>
                <div tw="text-center">
                  <Button
                    onClick={() => handleClick(network)}
                    disabled={network.wallets.length === 0}
                    size="big"
                    kind={
                      currentNetwork?.name === network.name ? 'neon' : 'flat'
                    }
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
                    onClick={() => onConnect(wallet.name, wallet.provider())}
                    as="button"
                    variant="tertiary"
                    color="main0"
                    kind="neon"
                    size={size}
                  >
                    {wallet.name}
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
      )}
    </StyledPicker>
  )
}

WalletPicker.displayName = 'WalletPicker'

export default WalletPicker
