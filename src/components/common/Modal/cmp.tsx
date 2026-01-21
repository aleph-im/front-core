import React, { MouseEvent, memo, useCallback } from 'react'
import { StyledOverlay, StyledModalCard } from './styles'
import { ModalProps } from './types'
import { Portal } from '../../layout/Portal'
import { useTransition } from 'transition-hook'
import { useTheme } from 'styled-components'

export const Modal = ({
  open,
  onClose,
  closeOnClickOutside = true,
  ...modalCardProps
}: ModalProps) => {
  const handlePreventDefault = useCallback((e: MouseEvent) => {
    e.stopPropagation()
  }, [])

  const handleOverlayClick = useCallback(() => {
    if (closeOnClickOutside) {
      onClose?.()
    }
  }, [closeOnClickOutside, onClose])

  const theme = useTheme()

  const { shouldMount, stage: $stage } = useTransition(
    open,
    theme.transition.duration.normal,
  )

  return (
    <Portal>
      {shouldMount && (
        <StyledOverlay {...{ $stage, onClick: handleOverlayClick }}>
          <StyledModalCard
            {...{
              ...modalCardProps,
              $stage,
              onClose,
              onClick: handlePreventDefault,
            }}
          />
        </StyledOverlay>
      )}
    </Portal>
  )
}
Modal.displayName = 'Modal'

export default memo(Modal) as typeof Modal
