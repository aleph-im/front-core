import React, { useState } from 'react';
import Button from '../Button';
import Icon from '../Icon';
import Logo from '../Logo';
import {
  StyledBurgerIconContainer,
  StyledHeadingContainer,
  StyledNavbarContainer,
  StyledNavlinks,
  StyledNavlink,
  StyledNavContainer,
} from './styles'
import { NavbarProps } from './types';

const Navbar = ({
  withLabel = true,
  withLogo = true,
  navLinks = [],
  navButtons = [],
  ...rest
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <StyledNavbarContainer {...rest}>
      <StyledHeadingContainer isOpen={isOpen}>
        {withLogo && <Logo text={withLabel} />}

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
        {navLinks && (
          <StyledNavlinks>
            {navLinks.map((el, index) => (
              <StyledNavlink key={index} withSlash>
                {el}
              </StyledNavlink>
            ))}
          </StyledNavlinks>
        )}

        {navButtons && (
          <StyledNavlinks>
            {navButtons.map((el, index) => (
              <StyledNavlink key={index}>{el}</StyledNavlink>
            ))}
          </StyledNavlinks>
        )}
      </StyledNavContainer>
    </StyledNavbarContainer>
  )
};

export default Navbar