import React from 'react'
import Icon from '../../../Icon'
import { StyledNavButton } from './styles'
import { NavButtonProps } from './types'

export const NavButton = ({
  onClick
}: NavButtonProps) => {
  return (
    <StyledNavButton
      kind="flat"
      variant="secondary"
      color="main0"
      size='regular'
      onClick={onClick}
    >
      <Icon name='bars' />
    </StyledNavButton>
  )
}

export default NavButton
