import React, { memo } from 'react'
import Button from '../../common/Button'
import { StyledIcon, StyledLine, StyledPicker, StyledTitle } from './styles'
import { AccountPickerProps } from './types'
import { useAccountPicker } from './hook'
import { ellipseText } from '../../../utils'
import Icon from '../../common/Icon'
import { useTheme } from 'styled-components'
import NetworkSelector from './NetworkSelector'
import { AccountInformation } from './AccountInformation/cmp'
import WalletSelector from './WalletSelector'
import { Portal } from '../../layout/Portal'

export const AccountPicker = ({
  isMobile = false,
  ...rest
}: AccountPickerProps) => {
  const theme = useTheme()
  const { button, button5 } = theme.component.walletPicker

  const {
    accountAddress,
    accountBalance,
    accountAddressHref,
    ensName,
    displayWalletPicker,
    walletPickerOpen,
    walletPickerRef,
    walletPickerTriggerRef,
    walletPosition,
    displayNetworksPicker,
    networksPickerOpen,
    networksPickerRef,
    networksPickerTriggerRef,
    networksPosition,
    displayCondensedPicker,
    condensedPickerOpen,
    condensedPickerRef,
    condensedPickerTriggerRef,
    condensedPosition,
    rewards,
    selectedNetwork,
    networks,
    oneNetwork,
    isConnected,
    handleSwitchNetwork,
    handleConnect,
    handleDisconnect,
    handleDisplayWalletPicker,
    handleDisplayNetworksPicker,
    handleDisplayCondensedPicker,
  } = useAccountPicker(rest)

  return (
    <>
      {!isMobile ? (
        <div tw="flex gap-4">
          <Button
            ref={networksPickerTriggerRef}
            onClick={handleDisplayNetworksPicker}
            tw="flex items-center gap-2"
            as="button"
            kind={button.kind(true)}
            color={button.color(true)}
            variant={button.variant(true)}
          >
            <Button
              disabled={oneNetwork}
              as="button"
              kind={button.kind(true)}
              color={button.color(true)}
              variant={button.variant(true)}
              size="md"
            >
              <Icon name={selectedNetwork.icon} size="1.5em" prefix="custom" />
            </Button>
            {!oneNetwork && <Icon name="angle-down" size="1em" />}
          </Button>
          <Button
            ref={walletPickerTriggerRef}
            as="button"
            kind={button5.kind}
            color={button5.color}
            variant={button5.variant}
            size="md"
            onClick={handleDisplayWalletPicker}
          >
            <div tw="flex items-center gap-3">
              {accountAddress
                ? ensName || ellipseText(accountAddress, 6, 4)
                : 'Connect'}
            </div>
          </Button>
        </div>
      ) : (
        <>
          <Button
            ref={condensedPickerTriggerRef}
            as="button"
            kind={button5.kind}
            color={button5.color}
            variant={button5.variant}
            size="md"
            onClick={handleDisplayCondensedPicker}
          >
            <div tw="flex items-center gap-3">
              <StyledIcon
                $network={selectedNetwork}
                $isConnected={isConnected}
                $isMobile={isMobile}
              />
            </div>
          </Button>
        </>
      )}
      <Portal>
        {displayWalletPicker && (
          <StyledPicker
            $isOpen={walletPickerOpen}
            $position={walletPosition}
            ref={walletPickerRef}
          >
            {isConnected && (
              <>
                <AccountInformation
                  rewards={rewards}
                  accountAddress={accountAddress}
                  accountAddressHref={accountAddressHref}
                  balance={accountBalance}
                />
                <StyledLine />
              </>
            )}
            <WalletSelector
              isConnected={isConnected}
              onConnect={handleConnect}
              onDisconnect={handleDisconnect}
              selectedNetwork={selectedNetwork}
            />
          </StyledPicker>
        )}
      </Portal>
      <Portal>
        {displayNetworksPicker && (
          <StyledPicker
            ref={networksPickerRef}
            $isOpen={networksPickerOpen}
            $position={networksPosition}
          >
            <NetworkSelector
              networks={networks}
              selectedNetwork={selectedNetwork}
              onSelectNetwork={handleSwitchNetwork}
            />
          </StyledPicker>
        )}
      </Portal>
      <Portal>
        {displayCondensedPicker && (
          <StyledPicker
            ref={condensedPickerRef}
            $isOpen={condensedPickerOpen}
            $position={condensedPosition}
          >
            {!oneNetwork && (
              <>
                {!isConnected && (
                  <StyledTitle>1. Choose your network</StyledTitle>
                )}
                <NetworkSelector
                  networks={networks}
                  selectedNetwork={selectedNetwork}
                  onSelectNetwork={handleSwitchNetwork}
                />
                <StyledLine />
              </>
            )}
            {isConnected ? (
              <>
                <AccountInformation
                  rewards={rewards}
                  accountAddress={accountAddress}
                  accountAddressHref={accountAddressHref}
                  balance={accountBalance}
                />
                <StyledLine />
              </>
            ) : (
              !oneNetwork && <StyledTitle>2. Connect your wallet</StyledTitle>
            )}
            <WalletSelector
              isConnected={isConnected}
              onConnect={handleConnect}
              onDisconnect={handleDisconnect}
              selectedNetwork={selectedNetwork}
            />
          </StyledPicker>
        )}
      </Portal>
    </>
  )
}
AccountPicker.displayName = 'AccountPicker'

export default memo(AccountPicker) as typeof AccountPicker
