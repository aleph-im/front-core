import React, { useCallback, useState } from 'react'
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

  return (
    <StyledNavbarContainer {...rest}>
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
