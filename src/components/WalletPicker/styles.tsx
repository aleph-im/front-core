import styled, { css } from 'styled-components'
import { StyledPickerProps } from './types'

export const StyledPicker = styled.div<StyledPickerProps>`
  ${({ size, backgroundColor }) => {
    const width = size === 'regular' ? '303px;' : '100%;'
    return css`
      position: relative;
      width: ${width}
      border-radius: 30px;
      background: ${backgroundColor};
      z-index:1;
      padding: 24px;
      `
  }}
`

export const WalletPickerText = styled.div<StyledPickerProps>`
  ${({ theme, size }) => {
    const width = size === 'regular' ? '18px;' : '24px;'
    return css`
    color: white;
    font-family: ${theme.typo.info.family};
    font-size: ${width}
    margin: 0 0 18px 0;
    `
  }}
`
