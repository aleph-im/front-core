import { ReactNode } from "react"

export type RowProps = {
  count?: number
  gap?: string | number
  children?: ReactNode
}

export type ColProps = {
  span?: number
  offset?: number
  children?: ReactNode
}

export type StyledRowProps = {
  count: number
  gap: string | number
}

export type StyledColProps = {
  span: number
  offset: number
}
