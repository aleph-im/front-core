import React, { memo, useMemo } from 'react'
import { ThemeProvider, useTheme } from 'styled-components'
import {
  StyledByAlephLink,
  StyledContainer2,
  StyledLogoContainer,
  StyledText,
} from './styles'
import { LogoProps } from './types'
import logos from './img'
import { themes } from '../../../themes'
import { LinkComponent } from '../../../types'

export const Logo = ({
  img,
  text = false,
  color = 'text',
  bgColor = 'main1',
  byAleph = true,
  Link = 'a' as unknown as LinkComponent,
  target = '_blank',
  href,
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
  byAleph = byAleph && !!text

  const linkContent = (
    <StyledContainer2>
      <LogoSvg color={logoColor} bgColor={logoBgColor} />
      {text && (
        <StyledText type="logo" color={color}>
          {text}
        </StyledText>
      )}
    </StyledContainer2>
  )

  return (
    <StyledLogoContainer {...{ size, text, ...rest }}>
      {href ? (
        <Link
          href={href}
          route={{ href }}
          target={target}
          style={{ lineHeight: '1em' }}
        >
          {linkContent}
        </Link>
      ) : (
        linkContent
      )}
      {byAleph && logo.by && (
        <ThemeProvider theme={themes.aleph}>
          <StyledByAlephLink
            href="https://aleph.im"
            target="_blank"
            rel="noreferrer"
            $color={logo.by.color}
          >
            by <Logo text color={logo.by.color} size="1.5em" />
          </StyledByAlephLink>
        </ThemeProvider>
      )}
    </StyledLogoContainer>
  )
}
Logo.displayName = 'Logo'

export default memo(Logo) as typeof Logo
