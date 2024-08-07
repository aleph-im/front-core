import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import {
  useHover,
  useResponsiveMax,
  useTransition,
  useWindowScroll,
  useWindowSize,
} from '../../../hooks'
import {
  StyledContentContainer,
  StyledContainer,
  StyledHeaderCloseIcon,
  StyledChildrenContainer,
} from './styles'
import { TooltipProps } from './types'
import { useFloatPosition } from '../../../hooks/useFloatPosition'
import { useTheme } from 'styled-components'
import { Portal } from '../../layout/Portal'

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
  variant = 1,
  onOpen,
  onClose,
  onCloseClick,
  closeDelay = 200,
  ...rest
}: TooltipProps) => {
  const tooltipRef = useRef<any>()
  const defaultTargetRef = useRef<any>()
  const targetRef = targetRefProp || defaultTargetRef

  const [openState, setOpenState] = useState(openProp || false)
  const isOpen = openProp !== undefined ? openProp : openState

  const theme = useTheme()

  const { shouldMount, stage } = useTransition(
    isOpen,
    theme.transition.duration.fast,
  )

  const windowSize = useWindowSize(100, true, true)
  const windowScroll = useWindowScroll(100, true)

  const { position } = useFloatPosition({
    my,
    at,
    margin,
    offset,
    atRef: targetRef,
    myRef: tooltipRef,
    deps: [stage, windowSize, windowScroll],
  })

  const { isHover: isHoverTarget } = useHover({
    ref: targetRef,
    deps: [children],
  })

  const { isHover: isHoverTooltip } = useHover({
    ref: tooltipRef,
    deps: [shouldMount],
  })

  const timerRef = useRef<NodeJS.Timeout>()

  const handleCloseClick = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)

    setOpenState(false)

    onCloseClick && onCloseClick()
    onClose && onClose()
  }, [onCloseClick, onClose])

  useEffect(() => {
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

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [isHoverTarget, isHoverTooltip, closeDelay, onOpen, onClose])

  const isMobile = useResponsiveMax('md')

  return (
    <>
      <Portal>
        {shouldMount && (
          <StyledContainer
            {...{
              ref: tooltipRef,
              $position: position,
              $stage: stage,
              $variant: variant,
              ...rest,
            }}
          >
            {(closeButton || isMobile) && (
              <div tw="flex items-center justify-end">
                <StyledHeaderCloseIcon onClick={handleCloseClick} />
              </div>
            )}
            <StyledContentContainer $variant={variant}>
              {content}
            </StyledContentContainer>
          </StyledContainer>
        )}
      </Portal>
      {children && (
        <StyledChildrenContainer ref={targetRef}>
          {children}
        </StyledChildrenContainer>
      )}
    </>
  )
}
Tooltip.displayName = 'Tooltip'

export default memo(Tooltip) as typeof Tooltip
