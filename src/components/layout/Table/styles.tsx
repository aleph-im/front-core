import styled, { css } from 'styled-components'
import { TableBorderType } from './types'

export type StyledTableProps = {
  $borderType?: TableBorderType
}

export const StyledTable = styled.table<StyledTableProps>`
  ${({ $borderType = 'none' }) => {
    const hasBorder = $borderType !== 'none'

    return css`
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0 0.625rem;

      thead th {
        font-size: 0.75rem;
        white-space: nowrap;
        text-transform: uppercase;
      }

      td,
      th {
        font-size: 1rem;
        padding: 0.75rem 1rem;
        width: 0;
      }

      th {
        border-bottom: 0.0625rem solid #ffffff22;
      }

      td {
        ${hasBorder &&
        css`
          border-bottom: 0.0625rem ${$borderType} #ffffff22;
        `}
      }

      th.sortable {
        cursor: pointer;
      }
    `
  }}
`
