import React, { ForwardedRef, forwardRef, memo, useMemo, useState } from 'react'
import tw from 'twin.macro'
import { Col, Row } from '../../layout/Grid'
import { BorderedDiv, StyledPicker, StyledTitle } from './styles'
import { NetworkProps, WalletPickerProps, WalletProps } from './types'
import { Logo } from '../../common/Logo'
import WalletIcon from './icons'
import Button from '../../common/Button'
import Icon from '../../common/Icon'
import { useTheme } from 'styled-components'
import ToggleContainer from '../../layout/ToggleContainer'
import Price from '../../common/Price'
import { formatCurrency } from '../../../utils'

export const WalletPicker = forwardRef(
  (
    {
      networks,
      address,
      balance,
      rewards,
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

    const displayBalance = useMemo(() => formatCurrency(balance), [balance])
    const [currentNetwork, setCurrentNetwork] = useState<NetworkProps>()

    const handleClick = (network: NetworkProps) => {
      setCurrentNetwork(network)
    }

    const theme = useTheme()
    const { color, button, button2, button3, button4 } =
      theme.component.walletPicker

    return (
      <StyledPicker ref={ref} {...rest}>
        {address ? (
          <>
            <div tw="flex items-center gap-4 mb-6">
              <Logo img="aleph" color="text" size="3rem" />
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

            {rewards && (
              <BorderedDiv tw="mt-6 flex items-start justify-between gap-4">
                <span className="fs-10 tp-body3" tw="opacity-60 mt-1">
                  EST. REWARDS
                </span>
                <div tw="text-right">
                  <Price
                    value={rewards.amount}
                    className="fs-16 tp-body3"
                    humanReadable={false}
                    css={{ color: color.rewards }}
                  />
                  <div className="fs-12 tp-body1" tw="opacity-60">
                    Next distribution in {rewards.days} days
                  </div>
                </div>
              </BorderedDiv>
            )}

            <BorderedDiv tw="mt-6 text-center">
              {addressHref ? (
                <Button
                  as="a"
                  target="_blank"
                  size="md"
                  href={addressHref}
                  kind={button3.kind}
                  variant={button3.variant}
                  color={button3.color}
                >
                  {displayAddress}
                  <Icon name="external-link-square-alt" tw="ml-2.5" />
                </Button>
              ) : (
                displayAddress
              )}
            </BorderedDiv>

            <BorderedDiv tw="mt-6 text-center">
              <Button
                size="md"
                kind={button4.kind}
                variant={button4.variant}
                color={button4.color}
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
              {networks.map((network) => {
                const isSelected = currentNetwork?.name === network.name

                return (
                  <Col key={network.name}>
                    <div tw="text-center">
                      <Button
                        onClick={() => handleClick(network)}
                        disabled={network.wallets.length === 0}
                        size="md"
                        tw="relative"
                        kind={button.kind(isSelected)}
                        color={button.color(isSelected)}
                        variant={button.variant(isSelected)}
                      >
                        {!isSelected && (
                          <div
                            tw="absolute! h-full w-full inset-0 -z-10"
                            className="fx-noise-base"
                          />
                        )}
                        <Icon
                          name={network.icon}
                          size="xl"
                          tw="w-6"
                          prefix="custom"
                        />
                      </Button>
                      <div
                        className="fs-10"
                        css={[
                          tw`mt-1`,
                          {
                            color: !isSelected ? color.disabled : color.default,
                          },
                        ]}
                      >
                        {network.name}
                      </div>
                    </div>
                  </Col>
                )
              })}
            </Row>
            <ToggleContainer open={!!currentNetwork?.wallets}>
              <BorderedDiv>
                <StyledTitle>2. Connect your wallet</StyledTitle>
                <Row count={1}>
                  {currentNetwork?.wallets?.map((wallet: WalletProps) => (
                    <Col key={wallet.name}>
                      <div tw="block text-center">
                        <Button
                          onClick={() => onConnect(wallet, currentNetwork)}
                          as="button"
                          size="md"
                          kind={button2.kind}
                          variant={button2.variant}
                          color={button2.color}
                        >
                          {wallet.name}
                          <WalletIcon
                            tw="ml-2.5"
                            name={wallet.icon}
                            color={button2.iconColor || wallet.color}
                          />
                        </Button>
                      </div>
                    </Col>
                  ))}
                </Row>
              </BorderedDiv>
            </ToggleContainer>
          </div>
        )}
      </StyledPicker>
    )
  },
)
WalletPicker.displayName = 'WalletPicker'

export default memo(WalletPicker) as typeof WalletPicker
