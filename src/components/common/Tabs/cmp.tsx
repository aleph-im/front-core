import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  StyledTabs,
  StyledTab,
  StyledLabel,
  StyledUnderscoreBar,
  StyledContainer,
} from './styles'
import { StyledTabType, TabLabelProps, TabProps, TabsProps } from './types'
import { useWindowSize } from '../../../hooks'

export const Tab = forwardRef(
  (
    { id, name, label, selected, disabled, onTabSelected }: TabProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const handleClick = useCallback(
      () => !disabled && onTabSelected(id),
      [disabled, id, onTabSelected],
    )

    const labelProps: TabLabelProps | undefined = useMemo(
      () =>
        label ? (typeof label === 'string' ? { label } : label) : undefined,
      [label],
    )

    return (
      <StyledTab
        ref={ref}
        role="tab"
        selected={selected}
        aria-selected={selected ? 'true' : 'false'}
        disabled={disabled}
        aria-disabled={disabled ? 'true' : 'false'}
        onClick={handleClick}
      >
        {name}
        {labelProps && (
          <StyledLabel {...labelProps} disabled={disabled}>
            {labelProps.label}
          </StyledLabel>
        )}
      </StyledTab>
    )
  },
)
Tab.displayName = 'Tab'

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

  const handleTabSelected = useCallback(
    (id: string) => {
      if (id === selectedId) return
      setSelected(id)
      onTabChange && onTabChange(id)
    },
    [onTabChange, selectedId],
  )

  const ref = useRef<HTMLDivElement>(null)
  const [underscoreStyle, setUnderscoreStyle] = useState({})

  useEffect(() => {
    if (!ref) return

    const left = ref.current?.offsetLeft || 0
    const width = Math.floor(ref.current?.getBoundingClientRect().width || 0)

    setUnderscoreStyle({ left, width })
  }, [windowSize, selectedId, tabs])

  return (
    <StyledContainer align={align}>
      <StyledTabs role="tablist" {...rest}>
        {tabs.map((tab) => (
          <TabMemo
            key={tab.id}
            ref={tab.id === selectedId ? ref : undefined}
            selected={selectedId === tab.id}
            onTabSelected={handleTabSelected}
            {...tab}
          />
        ))}
        <StyledUnderscoreBar style={underscoreStyle} />
      </StyledTabs>
    </StyledContainer>
  )
}
Tabs.displayName = 'Tabs'

export const TabMemo = memo(Tab)
export default memo(Tabs)
