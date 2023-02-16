import styled, { css } from 'styled-components'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { IconSize } from './types'

export interface StyledIconProps extends FontAwesomeIconProps {
  $iconSize: IconSize
}

export const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  ${({ $iconSize, theme }) => {
    switch ($iconSize) {
      case 'xs': {
        return css`
          font-size: ${theme.icon.size.xs}rem;
        `
      }
      case 'sm': {
        return css`
          font-size: ${theme.icon.size.sm}rem;
        `
      }
      case 'md': {
        return css`
          font-size: ${theme.icon.size.md}rem;
        `
      }
      case 'lg': {
        return css`
          font-size: ${theme.icon.size.lg}rem;
        `
      }
      case 'xl': {
        return css`
          font-size: ${theme.icon.size.xl}rem;
        `
      }
    }
  }}
`
