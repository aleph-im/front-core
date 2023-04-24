import { ReactNode } from "react"

export type BulletItemKind = 'check' | 'success' | 'error' | 'warning'
export type BulletListSize = 'regular' | 'big'

export type BulletListProps = {
  items: BulletItemProps[]
  children?: ReactNode
  size?: BulletListSize
}

export type BulletItemProps = {
  kind: BulletItemKind
  title: string
  text?: string
  size?: BulletListSize
}

