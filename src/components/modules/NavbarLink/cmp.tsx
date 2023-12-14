import React, { memo } from 'react'
import { StyledNavlink } from './styles'
import { NavbarLinkProps } from './types'

export const NavbarLink = ({
  children,
  breakpoint: $breakpoint = 'md',
  isActive: $isActive,
  ...rest
}: NavbarLinkProps) => {
  return (
    <StyledNavlink
      {...{
        $breakpoint,
        $isActive,
        ...rest,
      }}
    >
      {children}
    </StyledNavlink>
  )
}

export default memo(NavbarLink)
