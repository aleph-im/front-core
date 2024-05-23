import React, {
  memo,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from 'react'
import { StyledTable } from './styles'
import {
  TableCellProps,
  TableHeaderCellProps,
  TableRowProps,
  TableProps,
  TableDefaultSortFn,
} from './types'
import tw from 'twin.macro'
import Icon from '../../common/Icon'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import Spinner from '../../common/Spinner'

export function TableRow<R extends Record<string, unknown>>({
  row,
  columns,
  rowIndex,
  rowRender,
  rowProps,
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
            <TableCell
              key={colIndex}
              {...{ row, col, rowIndex, colIndex, rowNoise }}
            />
          ))}
        </tr>
      )}
    </>
  )
}
TableRow.displayName = 'TableRow'

export function TableCell<R extends Record<string, unknown>>({
  row,
  col,
  rowIndex,
  colIndex,
  rowNoise,
}: TableCellProps<R>) {
  const alignStyle = useMemo(() => {
    return col.align === 'center'
      ? tw`text-center`
      : col.align === 'right'
      ? tw`text-right`
      : tw`text-left`
  }, [col.align])

  const stickyStyle = useMemo(() => {
    return col.sticky === 'start'
      ? tw`sticky left-0 z-10 `
      : col.sticky === 'end'
      ? tw`sticky right-0 z-10 `
      : ''
  }, [col.sticky])

  const props = useMemo(() => {
    const cellProps = col.cellProps?.(row, col, rowIndex, colIndex) || {}
    const className =
      (cellProps?.className ? `${cellProps?.className} ` : '') +
      (rowNoise && rowIndex % 2 !== 0 ? 'fx-noise-light' : '')
    const css = { ...alignStyle, ...stickyStyle, ...(cellProps?.css as any) }
    return { ...cellProps, className, css }
  }, [col, row, rowIndex, colIndex, rowNoise, alignStyle, stickyStyle])

  return (
    <>
      {col.cellRender ? (
        col.cellRender(row, col, rowIndex, colIndex)
      ) : (
        <td key={colIndex} {...props} css={[props.css]}>
          {col.render(row, col, rowIndex, colIndex)}
        </td>
      )}
    </>
  )
}
TableCell.displayName = 'TableCell'

export function TableHeaderCell<R extends Record<string, unknown>>({
  col,
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

  const stickyPosition =
    col.sticky === 'start'
      ? tw`sticky left-0 z-20 `
      : col.sticky === 'end'
      ? tw`sticky right-0 z-20 `
      : ''

  return (
    <>
      {col.hcellRender ? (
        col.hcellRender(col, colIndex, sortedColumn, setSortedColumn)
      ) : (
        <th
          key={colIndex}
          {...props}
          css={[props.css, stickyPosition]}
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
TableHeaderCell.displayName = 'TableHeaderCell'

export function Table<R extends Record<string, unknown>>(props: TableProps<R>) {
  const {
    columns,
    data,
    infiniteScroll,
    infiniteScrollContainerRef,
    emptyPlaceholder,
    loadingPlaceholder,
    borderType: $borderType,
    rowKey,
    onLoadMore,
    onSort,
    ...rest
  } = props

  const randomId = useId()

  const [sortOptions, setSortOptions] = useState({ column: '', asc: true })

  const targetSortColumn = useMemo(() => {
    if (!sortOptions.column) return
    return columns.find(({ label }) => label === sortOptions.column)
  }, [columns, sortOptions.column])

  const handleSort: TableDefaultSortFn<R> = useCallback(
    (data) => {
      if (!data) return data
      if (!targetSortColumn) return data

      const getValue =
        targetSortColumn.sortBy ||
        ((row: R) =>
          String(targetSortColumn.render(row, targetSortColumn, -1, -1)))

      const sortFn =
        targetSortColumn.sort ||
        ((rowA: R, rowB: R) => {
          const A = getValue(rowA)
          const B = getValue(rowB)

          if (A < B) {
            return sortOptions.asc ? -1 : 1
          } else if (A > B) {
            return sortOptions.asc ? 1 : -1
          } else {
            return 0
          }
        })

      return data.slice(0).sort(sortFn)
    },
    [sortOptions.asc, targetSortColumn],
  )

  useEffect(() => {
    if (!onSort) return
    onSort(handleSort, targetSortColumn, sortOptions.asc)
  }, [handleSort, onSort, sortOptions.asc, targetSortColumn])

  const sortedData = useMemo(() => {
    if (onSort) return data
    return handleSort(data)
  }, [data, handleSort, onSort])

  // --------------------

  const rows: (R & { key: string })[] | undefined = useMemo(() => {
    if (!sortedData) return sortedData

    return sortedData.map((row, i) => ({
      ...row,
      key: rowKey ? rowKey(row) : `${randomId}${i}`,
    }))
  }, [sortedData, randomId, rowKey])

  // --------------------

  const [isLoading, setIsLoading] = useState(false)

  const handleLoadMore = useCallback(async () => {
    setIsLoading(true)
    onLoadMore && (await onLoadMore())
    setIsLoading(false)
  }, [onLoadMore])

  const [triggerRef, { rootRef }] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: !!infiniteScroll,
    disabled: !infiniteScroll,
    onLoadMore: handleLoadMore,
    rootMargin: '1px',
  })

  useEffect(() => {
    if (!infiniteScrollContainerRef?.current) return
    rootRef(infiniteScrollContainerRef.current)
  }, [infiniteScrollContainerRef, rootRef])

  return (
    <StyledTable {...{ $borderType, ...rest }}>
      <thead>
        <tr
          css={[
            props.stickyHeader &&
              tw`sticky top-0 z-10 bg-clip-border bg-opacity-50 backdrop-blur-sm`,
          ]}
        >
          {columns.map((col, colIndex) => (
            <TableHeaderCell
              key={colIndex}
              {...{
                col,
                colIndex,
                sortedColumn: sortOptions,
                setSortedColumn: setSortOptions,
              }}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {rows &&
          rows.map((row, rowIndex) => (
            <TableRow
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
        {(!rows || !rows.length) && emptyPlaceholder && (
          <tr className="empty-placeholder">
            <td colSpan={columns.length}>{emptyPlaceholder}</td>
          </tr>
        )}
        {(!!infiniteScroll || isLoading) && (
          <tr ref={triggerRef} className="loading-placeholder">
            {isLoading && (
              <td colSpan={columns.length}>
                {loadingPlaceholder || <Spinner color="text" tw="mx-auto" />}
              </td>
            )}
          </tr>
        )}
      </tbody>
    </StyledTable>
  )
}
Table.displayName = 'Table'

export const TableRowMemo = memo(TableRow) as typeof TableRow
export const TableCellMemo = memo(TableCell) as typeof TableCell
export const TableHeaderCellMemo = memo(
  TableHeaderCell,
) as typeof TableHeaderCell
export default memo(Table) as typeof Table
