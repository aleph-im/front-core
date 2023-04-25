import React from 'react'
import { StyledNavlink } from './styles'
import { NavbarLinkProps } from './types'

export const NavbarLink = ({ children, ...rest }: NavbarLinkProps) => {
  return <StyledNavlink {...rest}>{children}</StyledNavlink>
}

export default NavbarLink
