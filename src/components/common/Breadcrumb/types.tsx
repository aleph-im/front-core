import { ReactNode } from 'react'

export type BreadcrumbProps = {
  navLinks: ReactNode[]
  selected?: number
  selectedColor?: string
}
