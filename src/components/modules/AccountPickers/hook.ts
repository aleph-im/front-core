import { useCallback, useMemo, useRef, useState } from 'react'
import {
  useClickOutside,
  useFloatPosition,
  useTransition,
  useWindowScroll,
  useWindowSize,
} from '../../../hooks'
import { Network } from './NetworkSelector'
import { UseAccountPickersProps, UseAccountPickersReturn } from './types'
import { Wallet } from './WalletSelector'

export function useAccountPickers({
  handleConnect: handleConnectProp,
  handleDisconnect: handleDisconnectProp,
  accountAddress,
  blockchains,
  networks,
  selectedNetwork,
  ...rest
}: UseAccountPickersProps): UseAccountPickersReturn {
  const windowSize = useWindowSize(0)
  const windowScroll = useWindowScroll(0)

  // ----- Wallet picker -----
  const [displayWalletPicker, setDisplayWalletPicker] = useState(false)

  const walletPickerElementRef = useRef<HTMLDivElement>(null)
  const walletPickerButtonRef = useRef<HTMLButtonElement>(null)

  const handleDisplayWalletPicker = () => {
    setDisplayWalletPicker(!displayWalletPicker)
  }

  const { shouldMount: shouldMountWalletPicker, stage: stageWalletPicker } =
    useTransition(displayWalletPicker, 250)

  const {
    myRef: walletPickerRef,
    atRef: walletPickerTriggerRef,
    position: walletPosition,
  } = useFloatPosition({
    my: 'top-right',
    at: 'bottom-right',
    myRef: walletPickerElementRef,
    atRef: walletPickerButtonRef,
    deps: [accountAddress, windowSize, windowScroll, shouldMountWalletPicker],
  })

  const walletPickerOpen = stageWalletPicker === 'enter'

  useClickOutside(() => {
    if (displayWalletPicker) setDisplayWalletPicker(false)
  }, [walletPickerRef, walletPickerButtonRef])

  // ----- Networks picker -----
  const [displayNetworksPicker, setDisplayNetworksPicker] = useState(false)

  const networksPickerElementRef = useRef<HTMLDivElement>(null)
  const networksPickerButtonRef = useRef<HTMLButtonElement>(null)

  const handleDisplayNetworksPicker = () => {
    setDisplayNetworksPicker(!displayNetworksPicker)
  }

  const { shouldMount: shouldMountNetworksPicker, stage: stageNetworksPicker } =
    useTransition(displayNetworksPicker, 250)

  const {
    myRef: networksPickerRef,
    atRef: networksPickerTriggerRef,
    position: networksPosition,
  } = useFloatPosition({
    my: 'top-right',
    at: 'bottom-right',
    myRef: networksPickerElementRef,
    atRef: networksPickerButtonRef,
    deps: [accountAddress, windowSize, windowScroll, shouldMountNetworksPicker],
  })

  const networksPickerOpen = stageNetworksPicker === 'enter'

  useClickOutside(() => {
    if (displayNetworksPicker) setDisplayNetworksPicker(false)
  }, [networksPickerRef, networksPickerTriggerRef])

  // ----- Condensed picker -----
  const [displayCondensedPicker, setDisplayCondensedPicker] = useState(false)

  const condensedPickerElementRef = useRef<HTMLDivElement>(null)
  const condensedPickerButtonRef = useRef<HTMLButtonElement>(null)

  const handleDisplayCondensedPicker = () => {
    setDisplayCondensedPicker(!displayCondensedPicker)
  }

  const {
    shouldMount: shouldMountCondensedPicker,
    stage: stageCondensedPicker,
  } = useTransition(displayCondensedPicker, 250)

  const {
    myRef: condensedPickerRef,
    atRef: condensedPickerTriggerRef,
    position: condensedPosition,
  } = useFloatPosition({
    my: 'top-right',
    at: 'bottom-right',
    myRef: condensedPickerElementRef,
    atRef: condensedPickerButtonRef,
    deps: [
      accountAddress,
      windowSize,
      windowScroll,
      shouldMountCondensedPicker,
    ],
  })

  const condensedPickerOpen = stageCondensedPicker === 'enter'

  useClickOutside(() => {
    if (displayCondensedPicker) setDisplayCondensedPicker(false)
  }, [condensedPickerRef, condensedPickerTriggerRef])

  // ------------------------------

  const accountAddressHref = useMemo(
    () =>
      `${
        blockchains[selectedNetwork?.id || 'ETH'].explorerUrl
      }address/${accountAddress}`,
    [accountAddress, blockchains, selectedNetwork?.id],
  )

  const oneNetwork = useMemo(
    () =>
      networks.length < 2 && networks.some((n) => n.id === selectedNetwork?.id),
    [networks, selectedNetwork],
  )

  const isConnected = useMemo(() => !!accountAddress, [accountAddress])

  const handleConnect = useCallback(
    (wallet: Wallet, network: Network) => {
      handleConnectProp(wallet, network)
      setDisplayWalletPicker(false)
    },
    [handleConnectProp],
  )

  const handleDisconnect = useCallback(() => {
    handleDisconnectProp()
    setDisplayWalletPicker(false)
  }, [handleDisconnectProp])

  return {
    accountAddress,
    accountAddressHref,
    networks,
    selectedNetwork,
    oneNetwork,
    isConnected,
    walletPickerOpen,
    displayWalletPicker: shouldMountWalletPicker,
    walletPickerRef,
    walletPickerTriggerRef,
    walletPosition,
    handleDisplayWalletPicker,
    networksPickerOpen,
    displayNetworksPicker: shouldMountNetworksPicker,
    networksPickerRef,
    networksPickerTriggerRef,
    networksPosition,
    handleDisplayNetworksPicker,
    condensedPickerOpen,
    displayCondensedPicker: shouldMountCondensedPicker,
    condensedPickerRef,
    condensedPickerTriggerRef,
    condensedPosition,
    handleDisplayCondensedPicker,
    handleConnect,
    handleDisconnect,
    ...rest,
  }
}
