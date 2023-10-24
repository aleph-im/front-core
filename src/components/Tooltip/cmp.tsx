import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useHover } from '../../hooks'
import {
  StyledContentContainer,
  StyledHeaderContainer,
  StyledContainer,
  StyledHeaderCloseIcon,
} from './styles'
import { TooltipProps } from './types'
import { createPortal } from 'react-dom'
import { useFloatPosition } from '../../hooks/useFloatPosition'

export const Tooltip = ({
  open: openProp,
  targetRef: targetRefProp,
  children,
  header,
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

  const [isOpen, setIsOpen] = useState(openProp || false)
  const open = openProp !== undefined ? openProp : isOpen

  const { position } = useFloatPosition({
    my,
    at,
    margin,
    offset,
    targetRef,
    floaterRef: tooltipRef,
    deps: [open],
  })

  const [isHoverTarget] = useHover(targetRef)
  const [isHoverTooltip] = useHover(tooltipRef)

  const timmer = useRef<NodeJS.Timeout>()

  const handleCloseClick = useCallback(() => {
    if (timmer.current) clearTimeout(timmer.current)

    setIsOpen(false)

    onCloseClick && onCloseClick()
    onClose && onClose()
  }, [onCloseClick, onClose])

  useEffect(() => {
    if (timmer.current) clearTimeout(timmer.current)
    const open = isHoverTarget || isHoverTooltip

    if (open) {
      setIsOpen(true)
      onOpen && onOpen()
    } else {
      timmer.current = setTimeout(() => {
        setIsOpen(false)
        onClose && onClose()
      }, closeDelay)
    }
  }, [
    openProp,
    isHoverTarget,
    isHoverTooltip,
    setIsOpen,
    onOpen,
    handleCloseClick,
    closeDelay,
    onClose,
  ])

  return (
    <>
      {createPortal(
        <StyledContainer
          ref={tooltipRef}
          {...{ position, isOpen: open, ...rest }}
        >
          {header !== undefined && (
            <StyledHeaderContainer>
              {header}
              <StyledHeaderCloseIcon onClick={handleCloseClick} />
            </StyledHeaderContainer>
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
