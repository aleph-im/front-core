import styled, { css } from 'styled-components'
import { StyledTableProps } from './types'

export const StyledTable = styled.table<StyledTableProps>`
  ${({ bordered = false }) => css`
    width: 100%;

    ${bordered
      ? css`
          border-collapse: separate;
        `
      : css`
          border-collapse: collapse;
        `}

    thead {
      text-transform: uppercase;
    }

    td,
    th {
      text-align: left;
      padding: 15px 0;

      ${bordered &&
      css`
        border-bottom: 1px solid #ffffff22;
      `}
    }

    th.sortable {
      cursor: pointer;
    }

    tr {
      ${bordered &&
      css`
        border-bottom: 1px solid #ffffff22;
      `}
    }
  `}
`
