import React from 'react'
import { useTheme } from 'styled-components'
import { StyledLogoWrap } from './styles'
import { LogoProps } from './types'
import LogoSvg from './img/logo'
import TextGradient from '../TextGradient'

export const Logo = ({
  text = 'Aleph.im',
  color = 'text',
  size,
  ...rest
}: LogoProps) => {
  const theme = useTheme()

  const logoGradient = theme.gradient[color]?.colors[0]
  const logoColor = logoGradient || theme.color[color] || color
  text = typeof text === 'boolean' ? text && 'Aleph.im' : text

  return (
    <StyledLogoWrap {...{ size, text, ...rest }}>
      <LogoSvg color={logoColor} />
      {text && (<TextGradient type='logo' color={color}>{text}</TextGradient>)}
    </StyledLogoWrap>
  )
}

export default Logo
