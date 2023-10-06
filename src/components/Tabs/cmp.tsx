import React, { useCallback, useMemo, useState } from 'react'
import {
  StyledTabs,
  StyledTab,
  StyledLabel,
  StyledUnderscoreBar,
  StyledContainer,
} from './styles'
import { StyledTabType, TabLabelProps, TabsProps } from './types'
import { useBounds, useWindowSize } from '../../hooks'

export const TabLabel = (props: TabLabelProps) => {
  return <StyledLabel {...props}>{props.label}</StyledLabel>
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
  const selectedId = propSelected || selected

  const windowSize = useWindowSize()

  const handleClick = useCallback(
    (id: string) => {
      if (id === selectedId) return
      setSelected(id)
      onTabChange && onTabChange(id)
    },
    [onTabChange, selectedId],
  )

  const [parentBounds, parentRef] = useBounds<HTMLDivElement>(
    undefined,
    undefined,
    [selectedId, windowSize],
  )

  const [barBounds, ref] = useBounds<HTMLDivElement>(undefined, undefined, [
    parentBounds,
  ])

  const underscoreStyle = useMemo(() => {
    if (!barBounds || !parentBounds) return {}

    return {
      left: (barBounds.x || 0) - (parentBounds.x || 0),
      width: barBounds.width || 0,
    }
  }, [barBounds, parentBounds])

  return (
    <StyledContainer align={align}>
      <StyledTabs role="tablist" ref={parentRef} {...rest}>
        {tabs.map((tab) => (
          <StyledTab
            ref={tab.id === selectedId ? ref : undefined}
            key={tab.id}
            role="tab"
            selected={tab.id === selectedId}
            aria-selected={selectedId ? 'true' : 'false'}
            disabled={tab.disabled}
            aria-disabled={tab.disabled ? 'true' : 'false'}
            onClick={() => handleClick(tab.id)}
          >
            {tab.name}
            {tab.label && <TabLabel {...tab} />}
          </StyledTab>
        ))}
        <StyledUnderscoreBar style={underscoreStyle} />
      </StyledTabs>
    </StyledContainer>
  )
}

export default Tabs
