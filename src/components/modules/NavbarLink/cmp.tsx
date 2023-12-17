import React, { memo } from 'react'
import { StyledNavlink } from './styles'
import { NavbarLinkProps } from './types'

export const NavbarLink = ({
  children,
  breakpoint: $breakpoint = 'md',
  level: $level,
  ...rest
}: NavbarLinkProps) => {
  return (
    <StyledNavlink
      {...{
        $breakpoint,
        $level,
        ...rest,
      }}
    >
      {children}
    </StyledNavlink>
  )
}

export default memo(NavbarLink)
