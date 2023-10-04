import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useBounds, useHover } from '../../hooks'
import {
  StyledContentContainer,
  StyledHeaderContainer,
  StyledContainer,
  StyledHeaderCloseIcon,
} from './styles'
import { TooltipPosition, TooltipProps } from './types'
import { createPortal } from 'react-dom'

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
  const _targetRef = useRef<any>()
  const targetRef = targetRefProp || _targetRef

  const [isOpen, setIsOpen] = useState(openProp || false)
  const open = openProp !== undefined ? openProp : isOpen

  const [targetBounds] = useBounds('mouseover', targetRef, [targetRef])
  const [tooltipBounds] = useBounds('mouseover', tooltipRef, [open])

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

  const position: TooltipPosition = useMemo(() => {
    const [myPosY, myPosX] = my.split('-')
    const [atPosY, atPosX] = at.split('-')

    const {
      x: atX,
      y: atY,
      width: atW,
      height: atH,
    } = targetBounds || { x: 0, y: 0, width: 0, height: 0 }
    const { width: myW, height: myH } = tooltipBounds || {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }

    const targetX =
      atPosX === 'left' ? atX : atPosX === 'center' ? atX + atW / 2 : atX + atW
    const targetY =
      atPosY === 'top' ? atY : atPosY === 'center' ? atY + atH / 2 : atY + atH

    const tooltipOffsetX =
      myPosX === 'left'
        ? margin.x
        : myPosX === 'center'
        ? -(myW / 2)
        : -(myW + margin.x)
    const tooltipOffsetY =
      myPosY === 'top'
        ? margin.y
        : myPosY === 'center'
        ? -(myH / 2)
        : -(myH + margin.y)

    const x = targetX + tooltipOffsetX + offset.x
    const y = targetY + tooltipOffsetY + offset.y

    return { x, y }
  }, [at, my, targetBounds, tooltipBounds, offset, margin])

  return (
    <>
      {createPortal(
        <StyledContainer
          ref={tooltipRef}
          {...{ position, isOpen: open, ...rest }}
        >
          <StyledHeaderContainer>
            {header}
            <StyledHeaderCloseIcon onClick={handleCloseClick} />
          </StyledHeaderContainer>
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
