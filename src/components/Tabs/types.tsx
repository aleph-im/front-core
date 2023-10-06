import { ReactNode } from 'react'

export type LabelPosition = 'top' | 'bottom'

export type StyledTabType = {
  align?: 'left' | 'center' | 'right'
}

export type TabLabelProps = {
  label: ReactNode
  position?: LabelPosition
}

export type TabProps = Tab & {
  onTabSelected: (id: string) => void
}

export type Tab = {
  id: string
  name: string
  disabled?: boolean
  selected?: boolean
  label?: string | TabLabelProps
}

export type TabsProps = {
  tabs: Tab[]
  onTabChange?: (id: string) => void
  selected?: string
  defaultSelected?: string
}

export type StyledTabItemProps = {
  selected?: boolean
  disabled?: boolean
}
