import styled, { css } from 'styled-components'
import { ColProps, RowProps, defaultCount } from './types'

export const StyledRow = styled.div<RowProps>`
  ${(props) => {
    const { count, gap } = props
    return css`
      display: grid;
      grid-template-columns: repeat(${count}, 1fr);
      grid-gap: ${gap};

      @media (max-width: 768px) {
        grid-template-columns: repeat(
          ${Math.ceil((count || defaultCount) / 2)},
          1fr
        );
      }

      @media (max-width: 480px) {
        grid-template-columns: repeat(
          ${Math.ceil((count || defaultCount) / 4)},
          1fr
        );
      }
    `
  }}
`

export const StyledCol = styled.div<ColProps>`
  ${(props) => {
    const { span, offset } = props
    return css`
      ${offset
        ? `grid-column: ${offset} / span ${span};`
        : `grid-column: span ${span};`}
    `
  }}
`
