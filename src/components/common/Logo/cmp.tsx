import React, { memo, useMemo } from 'react'
import { useTheme } from 'styled-components'
import { StyledLogoContainer } from './styles'
import { LogoProps } from './types'
import TextGradient from '../TextGradient'
import logos from './img'

export const Logo = ({
  img,
  text = false,
  color = 'text',
  bgColor = 'main1',
  size,
  ...rest
}: LogoProps) => {
  const theme = useTheme()
  const { logo } = theme.component

  const LogoSvg = useMemo(() => logos[img || logo.img], [img, logo.img])

  const logoGradient = theme.gradient[color]?.colors[!text ? 1 : 0]
  const logoColor = logoGradient || theme.color[color] || color
  const logoBgColor = theme.color[bgColor] || bgColor
  text = typeof text === 'boolean' ? text && logo.text : text || logo.text

  return (
    <StyledLogoContainer {...{ size, text, ...rest }}>
      <LogoSvg color={logoColor} bgColor={logoBgColor} />
      {text && (
        <TextGradient type="logo" color={color}>
          {text}
        </TextGradient>
      )}
    </StyledLogoContainer>
  )
}
Logo.displayName = 'Logo'

export default memo(Logo) as typeof Logo
