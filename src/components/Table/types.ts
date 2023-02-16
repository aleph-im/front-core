type Column = {
  selector: <T>(row: T) => string | number
  label: string
  sortable?: boolean
  cell?: <T>(row: T) => JSX.Element
}

export type TableProps = {
  columns: Column[]
  data: object[]
}

export type StyledTableProps = {
  bordered?: boolean
}
