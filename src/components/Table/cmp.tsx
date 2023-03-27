import React from 'react'
import { StyledTable } from './styles'
import { TableProps, StyledTableProps } from './types'
import Icon from '../Icon'
import TextGradient from '../TextGradient'

type SortDirection = 'asc' | 'desc'

const toggleSort = (sort: SortDirection): SortDirection => {
  return sort === 'asc' ? 'desc' : 'asc'
}


export const Table = ({ columns, data, border = "none", oddRowNoise = false, keySelector, ...rest }: TableProps & StyledTableProps) => {
  const isSortedColumn = (column: string) => sortedColumn.column === column
  const [sortedColumn, setSortedColumn] = React.useState({
    column: '',
    direction: 'asc',
  })

  const keyedData = React.useMemo(() => data.map((row) => ({
    ...row,
    key: keySelector ? keySelector(row) : crypto.randomUUID()
  })), [data])

  const sortedData = React.useMemo(() => {
    return !sortedColumn.column
      ? keyedData
      : keyedData.sort((a, b) => {
          const column = columns.find(
            ({ label }) => label === sortedColumn.column,
          )
          if (!column) return 0

          const A = column.selector(a)
          const B = column.selector(b)
          if (A < B) {
            return sortedColumn.direction === 'asc' ? -1 : 1
          } else if (A > B) {
            return sortedColumn.direction === 'asc' ? 1 : -1
          } else {
            return 0
          }
        })
  }, [keyedData, sortedColumn])

  return (
    <StyledTable {...{ border, ...rest }}>
      <thead>
        <tr>
          {columns.map(({ sortable, label }, i) => (
            <th
              key={i}
              className={sortable ? 'sortable' : ''}
              onClick={() =>
                setSortedColumn({
                  column: label,
                  direction: toggleSort(
                    sortedColumn.direction as SortDirection,
                  ),
                })
              }
            >
              {sortable && (
                <div
                  style={{
                    opacity: isSortedColumn(label) ? 1 : 0.45,
                    display: 'inline-block',
                    paddingRight: '1rem',
                  }}
                >
                  <Icon
                    name={
                      !isSortedColumn(label)
                        ? 'sort'
                        : sortedColumn.direction === 'asc'
                        ? 'sort-up'
                        : 'sort-down'
                    }
                  />
                </div>
              )}
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr
            key={row.key}
            className={oddRowNoise && index % 2 === 0 ? 'fx-noise-light' : ''}
          >
            {columns.map(({ selector, cell }, j) => (
              <td key={j}>
                {cell ? (
                  cell(row)
                ) : (
                  selector(row)
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

export default Table
