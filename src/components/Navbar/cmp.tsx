
import React, { useCallback, useState } from 'react'
import Button from '../Button'
import Icon from '../Icon'
import {
  StyledBurgerIconContainer,
  StyledHeadingContainer,
  StyledNavbarContainer,
  StyledNavContainer,
} from './styles'
import { NavbarProps } from './types'

const Navbar = ({
  logo,
  children,
  ...rest
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen])

  return (
    <StyledNavbarContainer {...rest}>
      <StyledHeadingContainer isOpen={isOpen}>
        {logo}
        <StyledBurgerIconContainer>
          <Button
            color={'main0'}
            variant={'secondary'}
            kind={'neon'}
            size={'regular'}
            onClick={toggleIsOpen}
          >
            <Icon name="bars" />
          </Button>
        </StyledBurgerIconContainer>
      </StyledHeadingContainer>
      <StyledNavContainer isOpen={isOpen}>
        {children}
      </StyledNavContainer>
    </StyledNavbarContainer>
  )
}

export default Navbar
