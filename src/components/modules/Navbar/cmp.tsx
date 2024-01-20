import React, { memo, useCallback, useRef } from 'react'
import {
  StyledMobileTopContainer,
  StyledHeadingContainer,
  StyledNavbarContainer,
  StyledNavContainer,
  StyledLogoContainer,
} from './styles'
import { NavbarProps } from './types'
import { useClickOutside } from '../../../hooks'
import Button from '../../common/Button'
import Icon from '../../common/Icon'

export const Navbar = ({
  logo,
  children,
  mobileTopContent,
  open,
  onToggle,
  height: $height = '6.5rem',
  breakpoint: $breakpoint = 'md',
  ...rest
}: NavbarProps) => {
  const toggleMenu = useCallback(() => {
    onToggle && onToggle(!open)
  }, [open, onToggle])

  const closeMenu = useCallback(() => {
    onToggle && onToggle(false)
  }, [onToggle])

  const containerRef = useRef<HTMLDivElement>(null)
  useClickOutside(closeMenu, [containerRef])

  const $isOpen = !!open

  return (
    <StyledNavbarContainer
      {...{
        $breakpoint,
        $height,
        $isOpen,
        ...rest,
      }}
      ref={containerRef}
    >
      <StyledHeadingContainer>
        <StyledMobileTopContainer>
          <Button
            color="main0"
            variant="secondary"
            kind="neon"
            size="md"
            onClick={toggleMenu}
          >
            {!open ? <Icon name="bars" /> : <Icon name="close" />}
          </Button>
        </StyledMobileTopContainer>
        {logo && <StyledLogoContainer>{logo}</StyledLogoContainer>}
        {mobileTopContent && (
          <StyledMobileTopContainer>
            {mobileTopContent}
          </StyledMobileTopContainer>
        )}
      </StyledHeadingContainer>
      <StyledNavContainer>{children}</StyledNavContainer>
    </StyledNavbarContainer>
  )
}
Navbar.displayName = 'Navbar'

export default memo(Navbar) as typeof Navbar
