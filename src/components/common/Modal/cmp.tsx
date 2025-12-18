import React, { MouseEvent, memo, useCallback, useMemo, useState } from 'react'
import { OpenModalInfo, ModalContext, ModalInfo } from './context'
import { StyledOverlay, StyledModalCard } from './styles'
import { ModalProps } from './types'
import { Portal } from '../../layout/Portal'
import { useTransition } from 'transition-hook'
import { useTheme } from 'styled-components'

export const Modal = ({ children }: ModalProps) => {
  const [modal, setModal] = useState<ModalInfo>()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const open = useCallback((info: OpenModalInfo) => {
    const modal: ModalInfo = info
    setModal(modal)
    setIsOpen(true)
  }, [])

  const modalOnClose = modal?.onClose

  const close = useCallback(() => {
    setIsOpen(false)
    modalOnClose?.()
  }, [modalOnClose])

  const contextValue = useMemo(
    () => ({
      modal,
      open,
      close,
    }),
    [modal, open, close],
  )

  const { close: handleClose } = contextValue

  const handlePreventDefault = useCallback((e: MouseEvent) => {
    // @note: Causes issues with form interactions inside modals
    // e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleOverlayClick = useCallback(() => {
    if (modal?.closeOnClickOutside !== false) {
      handleClose()
    }
  }, [modal?.closeOnClickOutside, handleClose])

  const theme = useTheme()

  const { shouldMount, stage: $stage } = useTransition(
    isOpen,
    theme.transition.duration.normal,
  )

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <Portal>
        {shouldMount && (
          <StyledOverlay {...{ $stage, onClick: handleOverlayClick }}>
            <StyledModalCard
              {...{
                ...modal,
                $stage,
                onClose: handleClose,
                onClick: handlePreventDefault,
              }}
            />
          </StyledOverlay>
        )}
      </Portal>
    </ModalContext.Provider>
  )
}
Modal.displayName = 'Modal'

export default memo(Modal) as typeof Modal
