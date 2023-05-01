import { HTMLAttributes, ReactNode, TableHTMLAttributes } from 'react'

export type BorderType = 'none' | 'dashed' | 'solid'
export type AlignType = 'left' | 'center' | 'right'

export type Column<R extends Record<string, unknown>> = {
  selector: (row: R) => string | number
  label: string
  sortable?: boolean
  align?: AlignType
  cell?: (row: R) => ReactNode
}

export type TableProps<R extends Record<string, unknown>> =
  TableHTMLAttributes<HTMLTableElement> & {
    columns: Column<R>[]
    data: R[]
    rowProps?: (row: R, rowIndex: number) => HTMLAttributes<HTMLTableRowElement>
    cellProps?: (
      row: R,
      rowIndex: number,
      colIndex: number,
    ) => HTMLAttributes<HTMLTableCellElement>
    keySelector?: (row: R) => string | number

    oddRowNoise?: boolean
    borderType: BorderType
  }
