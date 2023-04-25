import styled, { css } from 'styled-components'
import { TableProps } from './types'

export const StyledTable = styled.table<TableProps>`
  ${({ borderType = 'none' }) => {
    const hasBorder = borderType !== 'none'

    return css`
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0 0.625rem;

      thead {
        text-transform: uppercase;
      }

      td,
      th {
        &:first-child{
          padding-left: 1rem;
        }

        &:last-child{
          padding-right: 1rem;
        }

        text-align: left;
        padding: 1rem 0;

        ${hasBorder &&
      css`
          border-bottom: 1px ${borderType} #ffffff22;
        `}
      }

      th.sortable {
        cursor: pointer;
      }

      tr {
        ${hasBorder &&
      css`
          border-bottom: 1px ${borderType} #ffffff22;
        `}
      }
    `}
  }
`
