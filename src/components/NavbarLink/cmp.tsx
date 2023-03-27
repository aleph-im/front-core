import React from 'react'
import { StyledNavlink } from './styles'
import { NavbarLinkProps } from './types'

const NavbarLink = ({
  children,
  ...rest
}: NavbarLinkProps) => {
  return (
    <StyledNavlink withSlash {...rest}>
      {children}
    </StyledNavlink>
  )
}

export default NavbarLink
