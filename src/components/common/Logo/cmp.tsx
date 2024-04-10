import React, { memo, useMemo } from 'react'
import { ThemeProvider, useTheme } from 'styled-components'
import {
  StyledByAleph,
  StyledContainer2,
  StyledLogoContainer,
  StyledText,
} from './styles'
import { LogoProps } from './types'
import logos from './img'
import { themes } from '../../../themes'

export const Logo = ({
  img,
  text = false,
  color = 'text',
  bgColor = 'main1',
  byAleph = true,
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
      <StyledContainer2>
        <LogoSvg color={logoColor} bgColor={logoBgColor} />
        {text && (
          <StyledText type="logo" color={color}>
            {text}
          </StyledText>
        )}
      </StyledContainer2>
      {byAleph && logo.by && (
        <a href="https://aleph.im" target="_blank" rel="noreferrer">
          <ThemeProvider theme={themes.aleph}>
            <StyledByAleph $color={logo.by.color}>
              by <Logo text color={logo.by.color} size="1.5em" />
            </StyledByAleph>
          </ThemeProvider>
        </a>
      )}
    </StyledLogoContainer>
  )
}
Logo.displayName = 'Logo'

export default memo(Logo) as typeof Logo
