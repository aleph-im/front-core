import React, { ForwardedRef, forwardRef, memo, useMemo, useState } from 'react'
import tw from 'twin.macro'
import { Col, Row } from '../../layout/Grid'
import { BorderedDiv, StyledPicker, StyledTitle } from './styles'
import { NetworkProps, WalletPickerProps } from './types'
import { Logo } from '../../common/Logo'
import WalletIcon from './icons'
import Button from '../../common/Button'
import Icon from '../../common/Icon'

export const WalletPicker = forwardRef(
  (
    {
      networks,
      address,
      balance,
      onConnect,
      onDisconnect,
      addressHref,
      ...rest
    }: WalletPickerProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const displayAddress = useMemo(
      () => `${address?.slice(0, 8)}...${address?.slice(-6)}`,
      [address],
    )

    const displayBalance = useMemo(() => {
      if (!balance) return '0.00'
      return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 2,
      }).format(balance)
    }, [balance])

    const [currentNetwork, setCurrentNetwork] = useState<NetworkProps>()

    const handleClick = (network: NetworkProps) => {
      setCurrentNetwork(network)
    }

    return (
      <StyledPicker ref={ref} {...rest}>
        {address ? (
          <>
            <div tw="flex items-center gap-4 mb-6">
              <Logo color="base0" size="3rem" />
              <div tw="leading-3">
                <div
                  className="tp-code1 fs-24"
                  tw="whitespace-nowrap leading-4! mb-3"
                >
                  {displayBalance}
                </div>
                <span className="fs-16 m-0" tw="opacity-40">
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
                  size="md"
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
                size="md"
                onClick={onDisconnect}
              >
                Logout
              </Button>
            </BorderedDiv>
          </>
        ) : (
          <div>
            <StyledTitle>1. Choose your network</StyledTitle>
            <Row count={4} gap="0.75rem" tw="mb-6">
              {networks.map((network) => (
                <Col key={network.name}>
                  <div tw="text-center">
                    <Button
                      onClick={() => handleClick(network)}
                      disabled={network.wallets.length === 0}
                      size="md"
                      tw="relative py-1!"
                      kind={
                        currentNetwork?.name === network.name ? 'neon' : 'flat'
                      }
                      color={
                        currentNetwork?.name === network.name
                          ? 'main0'
                          : 'white'
                      }
                      variant={
                        currentNetwork?.name === network.name
                          ? 'tertiary'
                          : 'secondary'
                      }
                    >
                      {currentNetwork?.name !== network.name && (
                        <div
                          tw="absolute! h-full w-full inset-0 -z-10"
                          className="fx-noise-base"
                        />
                      )}
                      <Icon name={network.icon} size="xl" tw="w-6" />
                    </Button>
                    <div
                      className="fs-10 text-base0"
                      css={[
                        tw`mt-1`,
                        currentNetwork?.name !== network.name && tw`opacity-60`,
                      ]}
                    >
                      {network.name}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            {currentNetwork?.wallets && (
              <BorderedDiv>
                <StyledTitle>2. Connect your wallet</StyledTitle>
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
                            size="md"
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
  },
)
WalletPicker.displayName = 'WalletPicker'

export default memo(WalletPicker) as typeof WalletPicker
