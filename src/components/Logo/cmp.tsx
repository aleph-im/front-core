import React from 'react'
import { useTheme } from 'styled-components'
import { StyledLogoWrap } from './styles'
import { LogoProps } from './types'
import LogoSvg from './img/logo'
import TextGradient from '../TextGradient'

export const Logo = ({
  label = true,
  color = 'text',
  size,
}: LogoProps) => {
  const theme = useTheme()

  const logoGradient = theme.gradient[color]?.colors[0]
  const logoColor = logoGradient || theme.color[color] || color

  return (
    <StyledLogoWrap size={size} label={label}>
      <LogoSvg color={logoColor} />
      {label && (<TextGradient type='logo' color={color}>Aleph.im</TextGradient>)}
    </StyledLogoWrap>
  )
}

export default Logo
