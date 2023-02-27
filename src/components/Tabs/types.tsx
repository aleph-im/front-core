export type TabLabelProps = {
  labelPosition?: 'top' | 'bottom'
}

export type TabType = {
  name: string
  component: JSX.Element
  disabled?: boolean
  label?: string
} & TabLabelProps

export type TabsProps = {
  tabs: TabType[]
  onTabChange?: (fromIndex: number, toIndex: number) => void
  defaultSelected?: number
}

export type StyledTabItemProps = {
  isSelected?: boolean
  isDisabled?: boolean
}
