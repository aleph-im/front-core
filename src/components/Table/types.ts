import { ReactNode, TableHTMLAttributes } from 'react'

export type BorderType = 'none' | 'dashed' | 'solid'

export type Column<R extends Record<string, unknown>> = {
  selector: (row: R) => string | number
  label: string
  sortable?: boolean
  cell?: (row: R) => ReactNode
}

export type TableProps<R extends Record<string, unknown>> =
  TableHTMLAttributes<HTMLTableElement> & {
    columns: Column<R>[]
    data: R[]
    keySelector?: (row: R) => string | number

    oddRowNoise?: boolean
    borderType: BorderType
  }
