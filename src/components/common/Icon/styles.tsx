import styled, { css } from 'styled-components'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { IconSize } from './types'

export interface StyledIconProps extends FontAwesomeIconProps {
  $iconSize: IconSize
  $gradientId?: string
}

export const StyledIconSizeCss = css<StyledIconProps>`
  && {
    ${({ $iconSize, theme }) => {
      const { icon } = theme.component

      switch ($iconSize) {
        case 'xs': {
          return css`
            font-size: ${icon.size.xs}rem;
          `
        }
        case 'sm': {
          return css`
            font-size: ${icon.size.sm}rem;
          `
        }
        case 'md': {
          return css`
            font-size: ${icon.size.md}rem;
          `
        }
        case 'lg': {
          return css`
            font-size: ${icon.size.lg}rem;
          `
        }
        case 'xl': {
          return css`
            font-size: ${icon.size.xl}rem;
          `
        }
        case '2xl': {
          return css`
            font-size: ${icon.size['2xl']}rem;
          `
        }
        default: {
          return css`
            font-size: ${$iconSize};
          `
        }
      }
    }}
  }
`

export const StyledCustomIconCss = css<StyledIconProps & { $color?: string }>`
  display: inline-block;
  overflow: visible;
  box-sizing: content-box;
  font-size: 1em;
  height: 1em;
  width: 1em;
  vertical-align: -0.125em;
  ${StyledIconSizeCss};
  fill: ${({ $color }) => $color || 'currentColor'};

  ${({ $gradientId }) => {
    if (!$gradientId) return ''

    return css`
      & path {
        fill: url(#${$gradientId});
      }
    `
  }};
`

export const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  ${StyledIconSizeCss}

  ${({ $gradientId }) => {
    if (!$gradientId) return ''

    return css`
      & path {
        fill: url(#${$gradientId});
      }
    `
  }};
`
