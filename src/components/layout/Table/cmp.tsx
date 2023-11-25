import React, { useId, useMemo, useState } from 'react'
import { StyledTable } from './styles'
import {
  TableCellProps,
  TableHeaderCellProps,
  TableRowProps,
  TableProps,
} from './types'
import tw from 'twin.macro'
import Icon from '../../common/Icon'

function Row<R extends Record<string, unknown>>({
  row,
  columns,
  rowIndex,
  rowRender,
  rowProps,
  sticky,
  rowNoise = false,
}: TableRowProps<R>) {
  const props = useMemo(() => {
    const rProps = rowProps?.(row, rowIndex) || {}
    return { css: {}, ...rProps }
  }, [rowIndex, row, rowProps])

  return (
    <>
      {rowRender ? (
        rowRender(row, rowIndex)
      ) : (
        <tr {...props} css={props.css}>
          {columns.map((col, colIndex) => (
            <Cell
              key={colIndex}
              {...{ row, col, rowIndex, colIndex, rowNoise }}
              sticky={sticky} // Pass the sticky prop
            />
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
  rowNoise,
  sticky, // New prop to determine if the column should be sticky
}: TableCellProps<R> & { sticky?: boolean }) {
  const alignStyle = useMemo(() => {
    return col.align === 'center'
      ? tw`text-center`
      : col.align === 'right'
      ? tw`text-right`
      : tw`text-left`
  }, [col.align])

  const props = useMemo(() => {
    const cellProps = col.cellProps?.(row, col, rowIndex, colIndex) || {}
    const className =
      (cellProps?.className ? `${cellProps?.className} ` : '') +
      (rowNoise && rowIndex % 2 !== 0 ? 'fx-noise-light' : '')
    const css = { ...alignStyle, ...(cellProps?.css as any) }
    return { ...cellProps, className, css }
  }, [col, row, rowIndex, colIndex, rowNoise, alignStyle])

  return (
    <>
      {col.cellRender ? (
        col.cellRender(row, col, rowIndex, colIndex)
      ) : (
        <td
          key={colIndex}
          {...props}
          css={[props.css, sticky && tw`sticky left-0`]} // Apply sticky styles conditionally
        >
          {col.render(row, col, rowIndex, colIndex)}
        </td>
      )}
    </>
  )
}

function HeaderCell<R extends Record<string, unknown>>({
  col,
  sticky,
  colIndex,
  sortedColumn,
  setSortedColumn,
}: TableHeaderCellProps<R>) {
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
      `${col.sortable ? 'sortable' : ''} tp-table`

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
          css={[props.css, sticky && tw`sticky top-0`]}
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

  const randomId = useId()

  const keyedData: (R & { key: string })[] = useMemo(
    () =>
      data.map((row, i) => ({
        ...row,
        key: rowKey ? rowKey(row) : `${randomId}${i}`,
      })),
    [data, randomId, rowKey],
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
              sticky={props.stickyHeader}
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
          <Row
            sticky={props.stickyColumn}
            key={row.key}
            {...{
              row,
              rowIndex,
              columns,
              rowRender: props.rowRender,
              rowProps: props.rowProps,
              rowNoise: props.rowNoise,
            }}
          />
        ))}
      </tbody>
    </StyledTable>
  )
}

export default Table
