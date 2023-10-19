import styled, { css } from 'styled-components'
import { RadioGroupDirection } from './types'

export const StyledRadioGroupContainer = styled.div`
  display: block;
  width: 100%;
  max-width: 100%;
`

export const StyledRadioContainer = styled.div<{
  direction: RadioGroupDirection
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
