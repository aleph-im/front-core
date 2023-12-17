import React, { memo, useCallback, useRef, useState } from 'react'
import { useClickOutside, useResponsiveBetween } from '../../../hooks'
import {
  StyledList,
  StyledContainer,
  StyledButton,
  StyledRestContainer,
} from './styles'
import { NavbarLinkListProps } from './types'
import Icon from '../../common/Icon'

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
  const containerRef = useRef<HTMLUListElement>(null)
  useClickOutside(handleClose, [buttonRef, containerRef])

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
      {isCollapsed && open && (
        <StyledRestContainer ref={containerRef}>
          {(children as any[]).slice(1)}
        </StyledRestContainer>
      )}
    </StyledContainer>
  )
}
NavbarLinkList.displayName = 'NavbarLinkList'

export default memo(NavbarLinkList)
