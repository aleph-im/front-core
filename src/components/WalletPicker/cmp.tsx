import React, { useMemo, useState } from 'react'
import { Col, Row } from '../Grid'
import Button from '../Button'
import { BorderedDiv, StyledPicker, StyledTitle } from './styles'
import { NetworkProps, WalletPickerProps } from './types'
import { Logo } from '../Logo'
import WalletIcon from './icons'
import Icon from '../Icon'

export const WalletPicker = ({
  size,
  networks,
  address,
  balance,
  onConnect,
  onDisconnect,
  addressHref,
}: WalletPickerProps) => {
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
      }}
    >
      {address ? (
        <>
          <div tw="flex items-center gap-4 mb-6">
            <Logo color="base0" size="3rem" text="" />
            <div tw="leading-3">
              <div
                className="tp-code1 fs-2xl"
                tw="whitespace-nowrap leading-4! mb-3"
              >
                {displayBalance}
              </div>
              <span className="fs-md m-0" tw="opacity-40">
                ALEPH
              </span>
            </div>
          </div>

          <BorderedDiv tw="py-8 text-center">
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
                {displayAddress}
                <Icon name="external-link-square-alt" tw="ml-2.5" />
              </Button>
            ) : (
              displayAddress
            )}
          </BorderedDiv>

          <BorderedDiv tw="py-8 text-center">
            <Button
              color="main2"
              variant="tertiary"
              kind="neon"
              size="regular"
              onClick={onDisconnect}
            >
              Logout
            </Button>
          </BorderedDiv>
        </>
      ) : (
        <div>
          <StyledTitle {...{ size }}>1. Choose your network</StyledTitle>
          <Row count={4} gap="0.75rem" tw="mb-6">
            {networks.map((network) => (
              <Col key={network.name}>
                <div tw="text-center">
                  <Button
                    onClick={() => handleClick(network)}
                    disabled={network.wallets.length === 0}
                    size="big"
                    tw="relative"
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
                    <div
                      tw="absolute! h-full w-full inset-0 -z-1"
                      className="fx-noise-base"
                    ></div>
                    <Icon
                      name={network.icon}
                      size={size == 'regular' ? 'md' : 'xl'}
                    />
                  </Button>
                  <div className="fs-2xs text-base0" tw="opacity-60">
                    {network.name}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {currentNetwork?.wallets && (
            <BorderedDiv>
              <StyledTitle {...{ size }}>2. Connect your wallet</StyledTitle>
              <Row count={1}>
                {currentNetwork?.wallets?.map(
                  (wallet: { [key: string]: any }) => (
                    <Col key={wallet.name}>
                      <div tw="block text-center">
                        <Button
                          onClick={() =>
                            onConnect(wallet.name, wallet.provider())
                          }
                          as="button"
                          variant="tertiary"
                          color="main0"
                          kind="neon"
                          size={size}
                        >
                          {wallet.name}
                          <WalletIcon
                            tw="ml-2.5"
                            name={wallet.icon}
                            color={wallet.color}
                          />
                        </Button>
                      </div>
                    </Col>
                  ),
                )}
              </Row>
            </BorderedDiv>
          )}
        </div>
      )}
    </StyledPicker>
  )
}

WalletPicker.displayName = 'WalletPicker'

export default WalletPicker
