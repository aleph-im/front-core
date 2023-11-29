import {
  HTMLAttributes,
  ReactNode,
  TableHTMLAttributes,
  TdHTMLAttributes,
} from 'react'

export type TableBorderType = 'none' | 'dashed' | 'solid'
export type TableAlignType = 'left' | 'center' | 'right'
export type TableStickyPosition = 'start' | 'end'

export type TableRow<R extends Record<string, unknown>> = {
  rowRender?: (row: R, rowIndex: number) => ReactNode
  rowProps?: (row: R, rowIndex: number) => HTMLAttributes<HTMLTableRowElement>
  rowKey?: (row: R) => string
}

export type TableColumn<R extends Record<string, unknown>> = {
  label: string
  sortable?: boolean
  align?: TableAlignType
  width?: string
  sticky?: TableStickyPosition
  cellRender?: (
    row: R,
    col: TableColumn<R>,
    rowIndex: number,
    colIndex: number,
  ) => ReactNode
  cellProps?: (
    row: R,
    col: TableColumn<R>,
    rowIndex: number,
    colIndex: number,
  ) => HTMLAttributes<HTMLTableCellElement>
  cellKey?: (
    row: R,
    col: TableColumn<R>,
    rowIndex: number,
    colIndex: number,
  ) => string
  hcellProps?: (
    col: TableColumn<R>,
    colIndex: number,
  ) => HTMLAttributes<HTMLTableCellElement>
  hcellRender?: (
    col: TableColumn<R>,
    colIndex: number,
    sortedColumn: TableSortedColumn,
    setSortedColumn: (s: TableSortedColumn) => void,
  ) => ReactNode
  render: (
    row: R,
    col: TableColumn<R>,
    rowIndex: number,
    colIndex: number,
  ) => ReactNode
  sort?: (rowA: R, rowB: R) => number
  sortBy?: (row: R) => number | string
}

export type TableProps<R extends Record<string, unknown>> =
  TableHTMLAttributes<HTMLTableElement> &
    TableRow<R> & {
      columns: TableColumn<R>[]
      data: R[]
      stickyHeader: boolean
      borderType: TableBorderType
      rowNoise?: boolean
    }

export type TableRowProps<R extends Record<string, unknown>> =
  HTMLAttributes<HTMLTableRowElement> &
    TableRow<R> & {
      row: R
      columns: TableColumn<R>[]
      rowIndex: number
      rowNoise?: boolean
    }

export type TableCellProps<R extends Record<string, unknown>> =
  TdHTMLAttributes<HTMLTableCellElement> & {
    row: R
    col: TableColumn<R>
    rowIndex: number
    colIndex: number
    rowNoise?: boolean
  }

export type TableSortedColumn = { column: string; asc: boolean }

export type TableHeaderCellProps<R extends Record<string, unknown>> =
  TdHTMLAttributes<HTMLTableCellElement> & {
    col: TableColumn<R>
    colIndex: number
    sortedColumn: TableSortedColumn
    setSortedColumn: (s: TableSortedColumn) => void
  }
