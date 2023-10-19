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
  ${({ direction }) => {
    return css`
      display: flex;
      align-items: flex-start;
      flex-direction: ${direction};
      gap: 1.125rem;
    `
  }}
`
