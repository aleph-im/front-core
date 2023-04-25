import React, {
  forwardRef,
  ForwardedRef,
  useState,
  useCallback,
  useMemo,
} from 'react'
import { useForwardRef } from '../../../hooks'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { StyledFormLabel, StyledInputWrapper } from '../styles.forms'
import { DropdownContext } from './context'
import {
  StyledDropdown,
  StyledDropdownIcon,
  StyledDropdownOptionMenu,
} from './styles'
import { DropdownProps } from './types'

export const Dropdown = forwardRef(
  (
    {
      id,
      label,
      value,
      defaultValue,
      onChange: parentOnChange,
      multiple,
      children,
      placeholder = 'Select an option',
      ...rest
    }: DropdownProps,
    fRef: ForwardedRef<HTMLDivElement>,
  ) => {
    const ref = useForwardRef(fRef)

    defaultValue = defaultValue || value || []
    defaultValue = Array.isArray(defaultValue) ? defaultValue : [defaultValue]

    const [valueSet, setValueSet] = useState<Set<string>>(new Set(defaultValue))
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const selectedText = useMemo(() => {
      const values = Array.from(valueSet)
      return values.length === 0
        ? placeholder
        : values.length > 3
        ? `${values.length} options selected`
        : (children as any[])
            .filter((c) => valueSet.has(c.props.value))
            .map((c) => (
              <span key={c.props.value} tw="mr-5">
                {c.props.children}
              </span>
            ))
    }, [placeholder, valueSet])

    const onClick = useCallback(() => {
      setIsOpen(!isOpen)
    }, [isOpen, setIsOpen])

    const close = useCallback(() => {
      setIsOpen(false)
    }, [setIsOpen])

    useClickOutside(close, [ref])

    const contextValue = useMemo(() => {
      function onChange(newValueSet: Set<string>) {
        newValueSet = new Set(newValueSet)
        setValueSet(newValueSet)

        if (!multiple) {
          setIsOpen(false)
        }

        if (parentOnChange) {
          const newValue = Array.from(newValueSet)
          parentOnChange(multiple ? newValue : newValue[0])
        }
      }

      return {
        value: Array.from(valueSet),
        valueSet,
        onAdd(v: string) {
          onChange(multiple ? valueSet.add(v) : new Set([v]))
        },
        onRemove(v: string) {
          if (!multiple) {
            onChange(new Set([v]))
            return
          }

          valueSet.delete(v)
          onChange(valueSet)
        },
      }
    }, [multiple, valueSet, setValueSet, parentOnChange])

    return (
      <DropdownContext.Provider value={contextValue}>
        <StyledInputWrapper>
          {label && <StyledFormLabel>{label}</StyledFormLabel>}
          <StyledDropdown {...{ id, ref, onClick, isOpen, ...rest }}>
            {selectedText}
            <StyledDropdownIcon />
            <StyledDropdownOptionMenu isOpen={isOpen}>
              {children}
            </StyledDropdownOptionMenu>
          </StyledDropdown>
        </StyledInputWrapper>
      </DropdownContext.Provider>
    )
  },
)

Dropdown.displayName = 'Dropdown'

export default Dropdown
