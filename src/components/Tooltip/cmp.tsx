import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useBounds, useHover } from '../../hooks'
import { StyledContentContainer, StyledHeaderContainer, StyledContainer, StyledHeaderCloseIcon } from './styles'
import { TooltipPosition, TooltipProps } from './types'

export const Tooltip = ({
  children,
  header,
  content,
  my = 'bottom-center',
  at = 'top-center',
  margin = { x: 5, y: 5 },
  offset = { x: 0, y: 0 },
  ...rest
}: TooltipProps) => {
  const targetRef = useRef<any>()
  const tooltipRef = useRef<any>()

  const [isOpen, setIsOpen] = useState(false)

  const [targetBounds] = useBounds('mouseover', targetRef, [])
  const [tooltipBounds] = useBounds('mouseover', tooltipRef, [isOpen])

  const [isHoverTarget] = useHover(targetRef)
  const [isHoverTooltip] = useHover(tooltipRef)

  useEffect(() => {
    const open = isHoverTarget || isHoverTooltip
    setIsOpen(open)
  }, [isHoverTarget, isHoverTooltip, setIsOpen])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const position: TooltipPosition = useMemo(() => {
    const [myPosY, myPosX] = my.split('-')
    const [atPosY, atPosX] = at.split('-')

    const { x: atX, y: atY, width: atW, height: atH } = targetBounds || { x: 0, y: 0, width: 0, height: 0 }
    const { width: myW, height: myH } = tooltipBounds || { x: 0, y: 0, width: 0, height: 0 }

    const targetX = atPosX === 'left' ? atX : atPosX === 'center' ? (atX + (atW / 2)) : (atX + atW)
    const targetY = atPosY === 'top' ? atY : atPosY === 'center' ? (atY + (atH / 2)) : (atY + atH)

    const tooltipOffsetX = myPosX === 'left' ? margin.x : myPosX === 'center' ? -(myW / 2) : -(myW + margin.x)
    const tooltipOffsetY = myPosY === 'top' ? margin.y : myPosY === 'center' ? -(myH / 2) : -(myH + margin.y)

    const x = targetX + tooltipOffsetX + offset.x
    const y = targetY + tooltipOffsetY + offset.y

    return { x, y }
  }, [at, my, targetBounds, tooltipBounds, offset, margin])


  return (
    <>
      <StyledContainer ref={tooltipRef} {...{ position, isOpen, ...rest }}>
        <StyledHeaderContainer>
          {header}
          <StyledHeaderCloseIcon onClick={handleClose} />
        </StyledHeaderContainer>
        <StyledContentContainer>
          {content}
        </StyledContentContainer>
      </StyledContainer>
      <span style={{ display: 'inline-block' }} ref={targetRef}>{children}</span>
    </>
  )
}

export default Tooltip
