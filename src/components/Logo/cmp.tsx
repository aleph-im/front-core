import React from 'react'
import { useTheme } from 'styled-components'
import { StyledLogoWrap } from './styles'
import { LogoProps } from './types'
import LogoSvg from './img/logo'

export const Logo = ({
  label = true,
  size = 140,
  color = 'text',
}: LogoProps) => {
  const theme = useTheme()
  color = theme.color[color] || color

  return (
    <StyledLogoWrap {...{ size, color }}>
      <LogoSvg color={color} />
      {label && (<span>Aleph.im</span>)}
    </StyledLogoWrap>
  )
}

export default Logo
