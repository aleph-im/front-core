import styled, { css } from 'styled-components'
import { RadioButtonGroupDirection } from './types'

export const StyledRadioButtonGroupContainer = styled.div`
  display: block;
  width: 100%;
  max-width: 100%;
`

export const StyledRadioButtonContainer = styled.div<{ direction: RadioButtonGroupDirection }>`
   ${({ theme, direction }) => {
    const isRow = direction === 'row'

    return css`
      display: flex;
      align-items: flex-start;
      flex-direction: ${direction};

      & > * {
        ${isRow ? 'margin-left' : 'margin-top'}: ${theme.font.size.md}rem;
        
        &:first-child {
          ${isRow ? 'margin-left' : 'margin-top'}: 0;margin-top: 0;
        }
      }
  `
  }}
`
