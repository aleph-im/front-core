import { ReactNode } from "react"

export type BorderType = 'none' | 'dashed' | 'solid'

type Column = {
  selector: <T>(row: T) => string | number
  label: string
  sortable?: boolean
  cell?: <T>(row: T) => ReactNode
}

export type TableProps = {
  columns: Column[]
  data: object[]
}

export type StyledTableProps = {
  oddRowNoise?: boolean
  border: BorderType
}
