import React from 'react'
import { StyledNavlinkList } from './styles'
import { NavbarLinkListProps } from './types'

const NavbarLinkList = ({
  children,
  ...rest
}: NavbarLinkListProps) => {
  return (
    <StyledNavlinkList {...rest}>
      {children}
    </StyledNavlinkList>
  )
}

export default NavbarLinkList
