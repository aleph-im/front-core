import React, { memo, useMemo, useState } from 'react'
import { OpenModalInfo, ModalContext, ModalInfo } from './context'
import { StyledOverlay, StyledModalCard } from './styles'
import { ModalProps } from './types'
import { Portal } from '../../layout/Portal'
import { useTransition } from 'transition-hook'
import { useTheme } from 'styled-components'

export const Modal = ({ children }: ModalProps) => {
  const [modal, setModal] = useState<ModalInfo>()
  const [open, setOpen] = useState<boolean>(false)

  const contextValue = useMemo(
    () => ({
      modal,
      open(info: OpenModalInfo) {
        const modal: ModalInfo = { ...info }
        setModal(modal)
        setOpen(true)
      },
      close() {
        setOpen(false)
      },
    }),
    [modal],
  )

  const { close: onClose } = contextValue

  const theme = useTheme()

  const { shouldMount, stage: $stage } = useTransition(
    open,
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
