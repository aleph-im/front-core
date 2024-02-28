import React, { memo, useCallback, useMemo, useRef, useState } from 'react'
import {
  useClickOutside,
  useFloatPosition,
  useResponsiveBetween,
  useTransition,
} from '../../../hooks'
import {
  StyledList,
  StyledContainer,
  StyledButton,
  StyledRestContainer,
} from './styles'
import { NavbarLinkListProps } from './types'
import Icon from '../../common/Icon'
import { useTheme } from 'styled-components'
import { Portal } from '../../layout/Portal'

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

  const restItems = useMemo(
    () =>
      isCollapsed && Array.isArray(children) && children.length > 1
        ? children.slice(1)
        : undefined,
    [children, isCollapsed],
  )

  const items = useMemo(
    () =>
      isCollapsed && Array.isArray(children) && children.length > 1
        ? children.slice(0, 1)
        : children,
    [children, isCollapsed],
  )

  const theme = useTheme()

  const { shouldMount, stage } = useTransition(
    isCollapsed && !!restItems && open,
    theme.transition.duration.fast,
  )

  const restIsOpen = stage === 'enter'

  const { position } = useFloatPosition({
    my: 'top-right',
    at: 'bottom-right',
    margin: { x: 0, y: 0 },
    offset: { x: 0, y: 0 },
    atRef: parentContainerRef,
    myRef: restContainerRef,
    deps: [shouldMount],
  })

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
      <StyledList>{items}</StyledList>
      {isCollapsed && (
        <StyledButton onClick={handleToggleOpen} ref={buttonRef}>
          <Icon name="bars" />
        </StyledButton>
      )}
      {shouldMount && (
        <Portal>
          <StyledRestContainer
            ref={restContainerRef}
            $isOpen={restIsOpen}
            $position={position}
          >
            {restItems}
          </StyledRestContainer>
        </Portal>
      )}
    </StyledContainer>
  )
}
NavbarLinkList.displayName = 'NavbarLinkList'

export default memo(NavbarLinkList) as typeof NavbarLinkList
