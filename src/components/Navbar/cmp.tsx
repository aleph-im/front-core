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
  ...rest
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = useCallback(
    () => setIsOpen(!isOpen),
    [isOpen, setIsOpen],
  )

  return (
    <StyledNavbarContainer {...rest}>
      <StyledHeadingContainer isOpen={isOpen} height={height}>
        <StyledMobileTopContainer>
          <Button
            color={'main0'}
            variant={'secondary'}
            kind={'neon'}
            size={'regular'}
            onClick={toggleIsOpen}
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
      <StyledNavContainer isOpen={isOpen}>{children}</StyledNavContainer>
    </StyledNavbarContainer>
  )
}

export default Navbar
