import styled, { css } from 'styled-components'
import { TableProps } from './types'

export const StyledTable = styled.table<TableProps<any>>`
  ${({ borderType = 'none' }) => {
    const hasBorder = borderType !== 'none'

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
        border-bottom: 1px solid #ffffff22;
      }

      td {
        ${hasBorder &&
        css`
          border-bottom: 1px ${borderType} #ffffff22;
        `}
      }

      th.sortable {
        cursor: pointer;
      }
    `
  }}
`
