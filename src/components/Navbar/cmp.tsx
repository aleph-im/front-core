import React, { useCallback, useRef, useState } from 'react'
import Button from '../Button'
import Icon from '../Icon'
import {
  StyledMobileTopContainer,
  StyledHeadingContainer,
  StyledNavbarContainer,
  StyledNavContainer,
  StyledLogoContainer,
} from './styles'
import { NavbarProps } from './types'
import { useClickOutside } from '../../hooks'

export const Navbar = ({
  logo,
  children,
  mobileTopContent,
  height,
  open,
  onToggle,
  ...rest
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const isOpenMenu = open !== undefined ? open : isOpen

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpenMenu)
    onToggle && onToggle(!isOpenMenu)
  }, [isOpenMenu, setIsOpen, onToggle])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
    onToggle && onToggle(false)
  }, [setIsOpen, onToggle])

  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(closeMenu, [ref])

  return (
    <StyledNavbarContainer {...rest} ref={ref}>
      <StyledHeadingContainer isOpen={isOpenMenu} height={height}>
        <StyledMobileTopContainer>
          <Button
            color={'main0'}
            variant={'secondary'}
            kind={'neon'}
            size={'regular'}
            onClick={toggleMenu}
          >
            <Icon name="bars" />
          </Button>
        </StyledMobileTopContainer>
        {logo && (
          <StyledLogoContainer height={height}>{logo}</StyledLogoContainer>
        )}
        {mobileTopContent && (
          <StyledMobileTopContainer>
            {mobileTopContent}
          </StyledMobileTopContainer>
        )}
      </StyledHeadingContainer>
      <StyledNavContainer isOpen={isOpenMenu}>{children}</StyledNavContainer>
    </StyledNavbarContainer>
  )
}

export default Navbar
