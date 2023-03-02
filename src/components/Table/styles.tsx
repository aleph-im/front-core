import styled, { css } from 'styled-components'
import { StyledTableProps } from './types'

export const StyledTable = styled.table<StyledTableProps>`
  ${({ border }) => {
  const hasBorder = border !== 'none'
  return css`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0 10px;

    thead {
      text-transform: uppercase;
    }

    td,
    th {
      text-align: left;
      padding: 15px 0;

      ${hasBorder &&
      css`
        border-bottom: 1px ${border} #ffffff22;
      `}
    }

    th.sortable {
      cursor: pointer;
    }

    tr {
      ${hasBorder &&
      css`
        border-bottom: 1px ${border} #ffffff22;
      `}
    }
  `}
}
`
