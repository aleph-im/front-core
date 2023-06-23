import {
  HTMLAttributes,
  ReactNode,
  TableHTMLAttributes,
  TdHTMLAttributes,
} from 'react'

export type BorderType = 'none' | 'dashed' | 'solid'
export type AlignType = 'left' | 'center' | 'right'

export type Row<R extends Record<string, unknown>> = {
  rowRender?: (row: R, rowIndex: number) => ReactNode
  rowProps?: (row: R, rowIndex: number) => HTMLAttributes<HTMLTableRowElement>
  rowKey?: (row: R) => string
  oddRowNoise?: boolean
}

export type Column<R extends Record<string, unknown>> = {
  label: string
  sortable?: boolean
  align?: AlignType
  width?: string
  cellRender?: (
    row: R,
    col: Column<R>,
    rowIndex: number,
    colIndex: number,
  ) => ReactNode
  cellProps?: (
    row: R,
    col: Column<R>,
    rowIndex: number,
    colIndex: number,
  ) => HTMLAttributes<HTMLTableCellElement>
  cellKey?: (
    row: R,
    col: Column<R>,
    rowIndex: number,
    colIndex: number,
  ) => string
  hcellProps?: (
    col: Column<R>,
    colIndex: number,
  ) => HTMLAttributes<HTMLTableCellElement>
  hcellRender?: (
    col: Column<R>,
    colIndex: number,
    sortedColumn: SortedColumn,
    setSortedColumn: (s: SortedColumn) => void,
  ) => ReactNode
  render: (
    row: R,
    col: Column<R>,
    rowIndex: number,
    colIndex: number,
  ) => ReactNode
  sort?: (rowA: R, rowB: R) => number
  sortBy?: (row: R) => number | string
}

export type TableProps<R extends Record<string, unknown>> =
  TableHTMLAttributes<HTMLTableElement> &
    Row<R> & {
      columns: Column<R>[]
      data: R[]
      borderType: BorderType
    }

export type RowProps<R extends Record<string, unknown>> =
  HTMLAttributes<HTMLTableRowElement> &
    Row<R> & {
      row: R
      columns: Column<R>[]
      rowIndex: number
    }

export type CellProps<R extends Record<string, unknown>> =
  TdHTMLAttributes<HTMLTableCellElement> & {
    row: R
    col: Column<R>
    rowIndex: number
    colIndex: number
  }

export type SortedColumn = { column: string; asc: boolean }

export type HeaderCellProps<R extends Record<string, unknown>> =
  TdHTMLAttributes<HTMLTableCellElement> & {
    col: Column<R>
    colIndex: number
    sortedColumn: SortedColumn
    setSortedColumn: (s: SortedColumn) => void
  }
