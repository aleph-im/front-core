import React, { useMemo, useState } from 'react'
import {
  StyledTabsHeader,
  StyledTabsItem,
  StyledTabLabel,
  StyledUnderscoreBar,
} from './styles'
import { StyledTabType, TabLabelProps, TabsProps } from './types'
import { useBounds } from '../../hooks'

export const TabLabel = (props: TabLabelProps) => {
  return <StyledTabLabel {...props}>{props.label}</StyledTabLabel>
}

export const Tabs = ({
  tabs,
  selected: propSelected,
  defaultSelected,
  onTabChange,
  align = 'center',
  ...rest
}: TabsProps & StyledTabType) => {
  const id = propSelected || defaultSelected
  const { id: safeDefault } =
    tabs.filter((tab) => !tab.disabled).find((tab) => tab.id === id) || {}

  const [selected, setSelected] = useState<string | undefined>(safeDefault)
  const safeSelected = propSelected || selected

  const handleClick = (i: string) => {
    setSelected(i)
    onTabChange && onTabChange(i)
  }

  const [parentBounds, parentRef] = useBounds<HTMLDivElement>(
    undefined,
    undefined,
    [safeSelected],
  )

  const [barBounds, ref] = useBounds<HTMLDivElement>(undefined, undefined, [
    safeSelected,
  ])

  const underscoreStyle = useMemo(() => {
    if (!barBounds || !parentBounds) return {}

    return {
      left: (barBounds.x || 0) - (parentBounds.x || 0),
      width: barBounds.width || 0,
    }
  }, [barBounds, parentBounds])

  return (
    <>
      <StyledTabsHeader align={align} role="tablist" {...rest} ref={parentRef}>
        {tabs.map((tab) => {
          if (tab.disabled) {
            return (
              <StyledTabsItem
                disabled
                key={tab.id}
                role="tab"
                aria-disabled="true"
              >
                {tab.name} {tab.label && <TabLabel {...tab} />}
              </StyledTabsItem>
            )
          } else if (tab.id === safeSelected) {
            return (
              <StyledTabsItem
                ref={ref}
                selected
                key={tab.id}
                role="tab"
                aria-selected="true"
              >
                {tab.name}
                {tab.label && <TabLabel {...tab} />}
              </StyledTabsItem>
            )
          }
          return (
            <StyledTabsItem
              onClick={() => handleClick(tab.id)}
              key={tab.id}
              role="tab"
              aria-selected="false"
            >
              {tab.name} {tab.label && <TabLabel {...tab} />}
            </StyledTabsItem>
          )
        })}
        <StyledUnderscoreBar style={underscoreStyle} />
      </StyledTabsHeader>
    </>
  )
}

export default Tabs
