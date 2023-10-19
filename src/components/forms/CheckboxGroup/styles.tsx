import styled, { css } from 'styled-components'
import { CheckboxGroupDirection } from './types'

export const StyledCheckboxGroupContainer = styled.div`
  display: block;
  width: 100%;
  max-width: 100%;
`

export const StyledCheckboxContainer = styled.div<{
  direction: CheckboxGroupDirection
}>`
  ${({ direction }) => {
    return css`
      display: flex;
      align-items: flex-start;
      flex-direction: ${direction};
      gap: 1.125rem;
    `
  }}
`
