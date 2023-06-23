import React, { useMemo, useState } from 'react'
import { StyledTable } from './styles'
import { CellProps, HeaderCellProps, RowProps, TableProps } from './types'
import Icon from '../Icon'
import tw from 'twin.macro'

function Row<R extends Record<string, unknown>>({
  row,
  columns,
  rowIndex,
  rowRender,
  rowProps,
  oddRowNoise = false,
}: RowProps<R>) {
  const props = useMemo(() => {
    const rProps = rowProps?.(row, rowIndex) || {}
    const className =
      (rProps?.className ? `${rProps?.className} ` : '') +
      (oddRowNoise && rowIndex % 2 === 0 ? 'fx-noise-light' : '')
    return { css: {}, ...rowProps, className }
  }, [rowIndex, oddRowNoise, row, rowProps])

  return (
    <>
      {rowRender ? (
        rowRender(row, rowIndex)
      ) : (
        <tr {...props} css={props.css}>
          {columns.map((col, colIndex) => (
            <Cell key={colIndex} {...{ row, col, rowIndex, colIndex }} />
          ))}
        </tr>
      )}
    </>
  )
}

function Cell<R extends Record<string, unknown>>({
  row,
  col,
  rowIndex,
  colIndex,
}: CellProps<R>) {
  const alignStyle = useMemo(() => {
    return col.align === 'center'
      ? tw`text-center`
      : col.align === 'right'
      ? tw`text-right`
      : tw`text-left`
  }, [col.align])

  const props = useMemo(() => {
    const cellProps = col.cellProps?.(row, col, rowIndex, colIndex) || {}
    const css = { ...alignStyle, ...(cellProps?.css as any) }
    return { ...cellProps, css }
  }, [alignStyle, col, rowIndex, colIndex, row])

  return (
    <>
      {col.cellRender ? (
        col.cellRender(row, col, rowIndex, colIndex)
      ) : (
        <td key={colIndex} {...props} css={props.css}>
          {col.render(row, col, rowIndex, colIndex)}
        </td>
      )}
    </>
  )
}

function HeaderCell<R extends Record<string, unknown>>({
  col,
  colIndex,
  sortedColumn,
  setSortedColumn,
}: HeaderCellProps<R>) {
  const alignStyle = useMemo(() => {
    return col.align === 'center'
      ? tw`text-center`
      : col.align === 'right'
      ? tw`text-right`
      : tw`text-left`
  }, [col.align])

  const props = useMemo(() => {
    const hcellProps = col.hcellProps?.(col, colIndex) || {}

    const css = { ...alignStyle, ...(hcellProps?.css as any) }

    const className =
      (hcellProps?.className ? `${hcellProps?.className} ` : '') +
      `${col.sortable ? 'sortable' : ''} tp-table fs-sm`

    const widthStyle = col.width ? { width: col.width } : {}
    const style = { ...widthStyle, ...(hcellProps?.style as any) }

    return { ...hcellProps, css, style, className }
  }, [alignStyle, col, colIndex])

  const isSorted = useMemo(
    () => sortedColumn.column === col.label,
    [col.label, sortedColumn.column],
  )

  return (
    <>
      {col.hcellRender ? (
        col.hcellRender(col, colIndex, sortedColumn, setSortedColumn)
      ) : (
        <th
          key={colIndex}
          {...props}
          css={props.css}
          style={props.style}
          onClick={() => {
            if (!col.sortable) return

            setSortedColumn({
              column: col.label,
              asc: !sortedColumn.asc,
            })
          }}
        >
          {col.label}
          {col.sortable && (
            <div
              style={{
                opacity: isSorted ? 1 : 0.45,
                display: 'inline-block',
                paddingLeft: '0.625rem',
              }}
            >
              <Icon
                name={
                  !isSorted
                    ? 'sort'
                    : sortedColumn.asc
                    ? 'sort-up'
                    : 'sort-down'
                }
              />
            </div>
          )}
        </th>
      )}
    </>
  )
}

export function Table<R extends Record<string, unknown>>(props: TableProps<R>) {
  const { columns, data, rowKey } = props

  const [sortedColumn, setSortedColumn] = useState({
    column: '',
    asc: true,
  })

  const keyedData: (R & { key: string })[] = useMemo(
    () =>
      data.map((row) => ({
        ...row,
        key: rowKey ? rowKey(row) : crypto.randomUUID(),
      })),
    [data, rowKey],
  )

  const targetSortColumn = useMemo(() => {
    return columns.find(({ label }) => label === sortedColumn.column)
  }, [columns, sortedColumn.column])

  const sortedData = useMemo(() => {
    if (!sortedColumn.column) return keyedData

    const getValue =
      targetSortColumn?.sortBy ||
      ((row: R) =>
        String(targetSortColumn?.render(row, targetSortColumn, -1, -1)))

    const sortFn =
      targetSortColumn?.sort ||
      ((rowA: R, rowB: R) => {
        const A = getValue(rowA)
        const B = getValue(rowB)

        if (A < B) {
          return sortedColumn.asc ? -1 : 1
        } else if (A > B) {
          return sortedColumn.asc ? 1 : -1
        } else {
          return 0
        }
      })

    return keyedData.sort(sortFn)
  }, [keyedData, sortedColumn.column, sortedColumn.asc, targetSortColumn])

  return (
    <StyledTable {...props}>
      <thead>
        <tr>
          {columns.map((col, colIndex) => (
            <HeaderCell
              key={colIndex}
              {...{
                col,
                colIndex,
                sortedColumn,
                setSortedColumn,
              }}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, rowIndex) => (
          <Row key={row.key} {...{ row, rowIndex, columns }} />
        ))}
      </tbody>
    </StyledTable>
  )
}

export default Table
