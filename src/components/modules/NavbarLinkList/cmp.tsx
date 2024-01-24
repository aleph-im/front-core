import React, { memo, useCallback, useRef, useState } from 'react'
import {
  useClickOutside,
  useFloatPosition,
  useResponsiveBetween,
  useTransitionedEnterExit,
} from '../../../hooks'
import {
  StyledList,
  StyledContainer,
  StyledButton,
  StyledRestContainer,
} from './styles'
import { NavbarLinkListProps } from './types'
import Icon from '../../common/Icon'
import { createPortal } from 'react-dom'

export const NavbarLinkList = ({
  children,
  breakpoint = 'md',
  collapsible = 'xs',
  onlyDesktop: $onlyDesktop,
  onlyMobile: $onlyMobile,
  desktopDirection: $desktopDirection,
  mobileDirection: $mobileDirection,
  mobileGap: $mobileGap,
  desktopGap: $desktopGap,
  withSlash: $withSlash,
  containerRef = document.body,
  ...rest
}: NavbarLinkListProps) => {
  const [open, setOpen] = useState(false)
  const isCollapsed = useResponsiveBetween(breakpoint, collapsible)

  const handleToggleOpen = useCallback(() => {
    setOpen(!open)
  }, [open])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const buttonRef = useRef<HTMLButtonElement>(null)
  const restContainerRef = useRef<HTMLUListElement>(null)
  const parentContainerRef = useRef<HTMLDivElement>(null)

  useClickOutside(handleClose, [buttonRef, restContainerRef])

  const { position } = useFloatPosition({
    my: 'top-right',
    at: 'bottom-right',
    margin: { x: 0, y: 0 },
    offset: { x: 0, y: 0 },
    atRef: parentContainerRef,
    myRef: restContainerRef,
    deps: [isCollapsed, open],
  })

  const { state } = useTransitionedEnterExit({
    onOff: isCollapsed && open,
  })

  const restIsOpen = state === 'enter'

  return (
    <StyledContainer
      {...{
        $withSlash,
        $onlyDesktop,
        $onlyMobile,
        $mobileDirection,
        $desktopDirection,
        $mobileGap,
        $desktopGap,
        $breakpoint: breakpoint,
        $isCollapsed: isCollapsed,
        ref: parentContainerRef,
        ...rest,
      }}
    >
      <StyledList>
        {isCollapsed ? children && (children as any[]).slice(0, 1) : children}
      </StyledList>
      {isCollapsed && (
        <StyledButton onClick={handleToggleOpen} ref={buttonRef}>
          <Icon name="bars" />
        </StyledButton>
      )}
      {typeof window === 'object'
        ? createPortal(
            <StyledRestContainer
              ref={restContainerRef}
              $isOpen={restIsOpen}
              $position={position}
            >
              {(children as any[]).slice(1)}
            </StyledRestContainer>,
            containerRef,
          )
        : null}
    </StyledContainer>
  )
}
NavbarLinkList.displayName = 'NavbarLinkList'

export default memo(NavbarLinkList) as typeof NavbarLinkList
