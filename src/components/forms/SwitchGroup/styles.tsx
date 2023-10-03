import styled, { css } from 'styled-components'
import { SwitchGroupDirection } from './types'

export const StyledSwitchGroupContainer = styled.div`
  display: block;
  width: 100%;
  max-width: 100%;
`

export const StyledSwitchContainer = styled.div<{
  direction: SwitchGroupDirection
}>`
  ${({ theme, direction }) => {
    const isRow = direction === 'row'

    return css`
      display: flex;
      align-items: flex-start;
      flex-direction: ${direction};

      & > * {
        ${isRow ? 'margin-left' : 'margin-top'}: ${theme.font.size.md}rem;

        &:first-child {
          ${isRow ? 'margin-left' : 'margin-top'}: 0;
          margin-top: 0;
        }
      }
    `
  }}
`
