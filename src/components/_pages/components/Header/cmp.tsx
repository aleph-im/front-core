import React from 'react'
import Logo from '../../../Logo'
import NavButton from '../NavButton'
import { StyledHeader } from './styles'
import { HeaderProps } from './types'

export const Header = ({
  sticky
}: HeaderProps) => {
  return (
    <StyledHeader className='fx-glass-base2'>
      <Logo />
      <NavButton onClick={() => alert(1)}/>
    </StyledHeader>
  )
}

export default Header
