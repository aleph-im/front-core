import React, { useMemo } from 'react'
import { StyledTable } from './styles'
import { TableProps } from './types'
import Icon from '../Icon'
import tw from 'twin.macro'

type SortDirection = 'asc' | 'desc'

const toggleSort = (sort: SortDirection): SortDirection => {
  return sort === 'asc' ? 'desc' : 'asc'
}

export function Table<T extends Record<string, unknown>>(props: TableProps<T>) {
  const {
    columns,
    data,
    oddRowNoise = false,
    keySelector,
    rowProps,
    cellProps,
  } = props

  const isSortedColumn = (column: string) => sortedColumn.column === column
  const [sortedColumn, setSortedColumn] = React.useState({
    column: '',
    direction: 'asc',
  })

  const keyedData = useMemo(
    () =>
      data.map((row) => ({
        ...row,
        key: keySelector ? keySelector(row) : crypto.randomUUID(),
      })),
    [data, keySelector],
  )

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
  }, [columns, keyedData, sortedColumn.column, sortedColumn.direction])

  return (
    <StyledTable {...props}>
      <thead>
        <tr>
          {columns.map(({ sortable, label, align = 'left' }, i) => {
            const alignStyle =
              align === 'center'
                ? tw`text-center`
                : align === 'right'
                ? tw`text-right`
                : tw`text-left`

            return (
              <th
                key={i}
                className={`${sortable ? 'sortable' : ''} tp-table fs-sm`}
                css={alignStyle}
                onClick={() =>
                  setSortedColumn({
                    column: label,
                    direction: toggleSort(
                      sortedColumn.direction as SortDirection,
                    ),
                  })
                }
              >
                {label}

                {sortable && (
                  <div
                    style={{
                      opacity: isSortedColumn(label) ? 1 : 0.45,
                      display: 'inline-block',
                      paddingLeft: '0.625rem',
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
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, i) => (
          <tr
            key={row.key}
            className={oddRowNoise && i % 2 === 0 ? 'fx-noise-light' : ''}
            {...rowProps?.(row, i)}
          >
            {columns.map(({ selector, cell, align }, j) => {
              const alignStyle =
                align === 'center'
                  ? tw`text-center`
                  : align === 'right'
                  ? tw`text-right`
                  : tw`text-left`

              return (
                <td key={j} css={alignStyle} {...cellProps?.(row, i, j)}>
                  {cell ? cell(row) : selector(row)}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

export default Table
