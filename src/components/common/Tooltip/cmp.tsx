import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useHover, useResponsiveMax } from '../../../hooks'
import {
  StyledContentContainer,
  StyledContainer,
  StyledHeaderCloseIcon,
} from './styles'
import { TooltipProps } from './types'
import { createPortal } from 'react-dom'
import { useFloatPosition } from '../../../hooks/useFloatPosition'
import { useTransitionedEnterExit } from '../../../hooks/useTransitionedEnterExit'

export const Tooltip = ({
  open: openProp,
  targetRef: targetRefProp,
  children,
  closeButton = false,
  content,
  my = 'bottom-center',
  at = 'top-center',
  margin = { x: 5, y: 5 },
  offset = { x: 0, y: 0 },
  onOpen,
  onClose,
  onCloseClick,
  closeDelay = 200,
  containerRef = document.body,
  ...rest
}: TooltipProps) => {
  const tooltipRef = useRef<any>()
  const defaultTargetRef = useRef<any>()
  const targetRef = targetRefProp || defaultTargetRef

  const [openState, setOpenState] = useState(openProp || false)
  const isOpen = openProp !== undefined ? openProp : openState

  const { shouldMount, state } = useTransitionedEnterExit({
    onOff: isOpen,
    ref: tooltipRef,
  })

  const { position } = useFloatPosition({
    my,
    at,
    margin,
    offset,
    atRef: targetRef,
    myRef: tooltipRef,
    deps: [shouldMount],
  })

  const { isHover: isHoverTarget } = useHover({ ref: targetRef })
  const { isHover: isHoverTooltip } = useHover({
    ref: tooltipRef,
    deps: [state],
  })

  const timerRef = useRef<NodeJS.Timeout>()

  const handleCloseClick = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)

    setOpenState(false)

    onCloseClick && onCloseClick()
    onClose && onClose()
  }, [onCloseClick, onClose])

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    const isHovered = isHoverTarget || isHoverTooltip

    if (isHovered) {
      setOpenState(true)
      onOpen && onOpen()
      return
    }

    timerRef.current = setTimeout(() => {
      setOpenState(false)
      onClose && onClose()
    }, closeDelay)
  }, [isHoverTarget, isHoverTooltip, closeDelay, onOpen, onClose])

  const isMobile = useResponsiveMax('md')

  return (
    <>
      {shouldMount &&
        createPortal(
          <StyledContainer
            {...{
              ref: tooltipRef,
              $position: position,
              $state: state,
              ...rest,
            }}
          >
            {(closeButton || isMobile) && (
              <div tw="flex items-center justify-end">
                <StyledHeaderCloseIcon onClick={handleCloseClick} />
              </div>
            )}
            <StyledContentContainer>{content}</StyledContentContainer>
          </StyledContainer>,
          containerRef,
        )}
      {children && (
        <span style={{ display: 'inline-block' }} ref={targetRef}>
          {children}
        </span>
      )}
    </>
  )
}

export default Tooltip
