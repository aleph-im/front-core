import React, { memo, useCallback, useMemo, useState } from 'react'
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

  const close = useCallback(() => {
    setIsOpen(false)
    modal?.onClose && modal?.onClose()
  }, [modal])

  const contextValue = useMemo(
    () => ({
      modal,
      open,
      close,
    }),
    [modal, open, close],
  )

  const { close: onClose } = contextValue

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
          <StyledOverlay {...{ $stage }}>
            <StyledModalCard
              {...{
                ...modal,
                $stage,
                onClose,
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
