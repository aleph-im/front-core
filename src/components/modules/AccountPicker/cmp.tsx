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
import ExternalUrl from './ExternalUrl'

export const AccountPicker = ({
  isMobile = false,
  showCredits = false,
  accountVouchers,
  disabledTopUp,
  handleTopUpClick,
  Link = 'a' as unknown as AccountPickerProps['Link'],
  ...rest
}: AccountPickerProps) => {
  const theme = useTheme()
  const { button, button5 } = theme.component.walletPicker

  const {
    accountAddress,
    accountCredits,
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
    externalUrl,
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
                : 'Connect Wallet'}
            </div>
          </Button>
          <div
            ref={networksPickerTriggerRef}
            onClick={handleDisplayNetworksPicker}
            tw="flex items-center gap-2"
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
          </div>
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
                  showCredits={showCredits}
                  credits={accountCredits}
                  balance={accountBalance}
                  vouchers={accountVouchers}
                  disabledTopUp={disabledTopUp}
                  handleTopUpClick={handleTopUpClick}
                  externalUrl={externalUrl}
                  Link={Link}
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
            {!isConnected && (
              <>
                <StyledLine />
                <ExternalUrl
                  Link={Link}
                  text={externalUrl.text}
                  url={externalUrl.url}
                />
              </>
            )}
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
                  showCredits={showCredits}
                  credits={accountCredits}
                  balance={accountBalance}
                  vouchers={accountVouchers}
                  disabledTopUp={disabledTopUp}
                  handleTopUpClick={handleTopUpClick}
                  externalUrl={externalUrl}
                  Link={Link}
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
            {!isConnected && (
              <>
                <StyledLine />
                <ExternalUrl
                  Link={Link}
                  text={externalUrl.text}
                  url={externalUrl.url}
                />
              </>
            )}
          </StyledPicker>
        )}
      </Portal>
    </>
  )
}
AccountPicker.displayName = 'AccountPicker'

export default memo(AccountPicker) as typeof AccountPicker
