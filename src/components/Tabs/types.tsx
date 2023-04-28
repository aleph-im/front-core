export type LabelPosition = 'top' | 'bottom'

export type StyledTabType = {
  align?: 'left' | 'center' | 'right'
}

export type Tab = {
  id: string
  name: string
  disabled?: boolean
  label?: string
  labelPosition?: LabelPosition
}

export type TabsProps = {
  tabs: Tab[]
  onTabChange?: (id: string) => void
  selected?: string
  defaultSelected?: string
}

export type TabLabelProps = Tab

export type StyledTabItemProps = {
  selected?: boolean
  disabled?: boolean
}
