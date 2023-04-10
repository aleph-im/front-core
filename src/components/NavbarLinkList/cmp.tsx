import React, { useCallback, useRef, useState } from 'react'
import { useTheme } from 'styled-components'
import { useClickOutside } from '../../hooks'
import { useWindowSize } from '../../hooks/useWindowSize'
import Icon from '../Icon'
import { StyledList, StyledContainer, StyledButton, StyledRestContainer } from './styles'
import { NavbarLinkListProps } from './types'

export const NavbarLinkList = ({
  children,
  collapsible,
  onlyDesktop,
  onlyMobile,
  desktopDirection,
  mobileDirection,
  withSlash,
  ...rest
}: NavbarLinkListProps) => {
  const [open, setOpen] = useState(false)

  const theme = useTheme()
  const bp = (collapsible ? theme.breakpoint[collapsible] : 0) * 16
  const mobileBp = theme.breakpoint.md * 16

  const size = useWindowSize()
  const windowWidth = size?.width || 0

  const isCollapsed = (collapsible && windowWidth <= bp && windowWidth > mobileBp) || false

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
    <StyledContainer {...{
      onlyDesktop,
      onlyMobile,
      isCollapsed,
      ...rest
    }}>
      <StyledList {...{
        theme,
        withSlash,
        mobileDirection,
        desktopDirection
      }}>
        {isCollapsed ? (
          children && (children as any[]).slice(0, 1)
        ) : (
          children
        )}
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

export default NavbarLinkList
