export type RowProps = {
  count?: number
  gap?: string | number
  children?: React.ReactNode
}

export type ColProps = {
  span?: number
  offset?: number
  children?: React.ReactNode
}

export const defaultCount = 12
