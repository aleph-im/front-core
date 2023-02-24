export type TabType = {
  name: string
  component: JSX.Element
  disabled?: boolean
  label?: string
}

export type TabsProps = {
  tabs: TabType[]
  onTabChange?: (fromIndex: number, toIndex: number) => void
  defaultSelected?: number
}

export type StyledTabItemProps = {
  isSelected?: boolean
  isDisabled?: boolean
}