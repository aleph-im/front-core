import styled, { css } from 'styled-components'
import { StyledPickerProps } from './types'

export const StyledPicker = styled.div<StyledPickerProps>`
  ${({ theme, size }) => {
    const width = size === 'regular' ? '318px;' : '100%;'
    return css`
      position: relative;
      width: ${width}
      border-radius: 1.875rem;
      background: ${theme.color.base0}0A;
      z-index:1;
      padding: 1.5rem;
      box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(50px);
      `
  }}
`

export const StyledTitle = styled.div<StyledPickerProps>`
  ${({ theme, size }) => {
    const width = size === 'regular' ? '1.125rem' : '1.5rem'

    return css`
      color: ${theme.color.base0};
      font-family: ${theme.typo.info.family};
      font-size: ${width};
      margin: 0 0 2rem 0;
    `
  }}
`

export const BorderedDiv = styled.div`
  padding-top: 1.5rem;
  border-top: ${({ theme }) => `1px solid ${theme.color.base0}33`};
`
