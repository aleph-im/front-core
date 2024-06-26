/* eslint-disable react/prop-types */
import React, {
  forwardRef,
  ForwardedRef,
  useState,
  useCallback,
  useMemo,
  memo,
  MouseEvent,
  useRef,
} from 'react'
import {
  useBounds,
  useForwardRef,
  useTransition,
  useWindowSize,
} from '../../../hooks'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { StyledInputWrapper } from '../styles.forms'
import { DropdownContext } from './context'
import {
  StyledDropdown,
  StyledDropdownIcon,
  StyledDropdownOptionMenu,
} from './styles'
import { DropdownProps } from './types'
import FormLabel from '../FormLabel'
import FormError from '../FormError'
import { useWindowScroll } from '../../../hooks/useWindowScroll'
import { useTheme } from 'styled-components'
import { Portal } from '../../layout/Portal'
import { DropdownOption } from '../DropdownOption'

export const Dropdown = forwardRef(
  (
    {
      label,
      error,
      value,
      onChange: onChangeProp,
      multiple,
      children,
      disabled,
      placeholder = 'Select an option',
      required,
      ...rest
    }: DropdownProps,
    fRef: ForwardedRef<HTMLDivElement>,
  ) => {
    const inputRef = useForwardRef(fRef)
    const menuRef = useRef<HTMLDivElement>(null)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const valueSet = useMemo(() => {
      const val = value || []
      const valueArray = Array.isArray(val) ? val : [val]
      return new Set(valueArray)
    }, [value])

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
    }, [children, placeholder, valueSet])

    const onClick = useCallback(() => {
      if (disabled) return

      setIsOpen(!isOpen)
    }, [disabled, isOpen])

    const close = useCallback(() => {
      setIsOpen(false)
    }, [setIsOpen])

    const windowSize = useWindowSize(100, true, true)
    const windowScroll = useWindowScroll(100, true)

    const { bounds: size } = useBounds<HTMLDivElement>({
      ref: inputRef,
      deps: [windowSize, windowScroll],
    })

    const onChange = useCallback(
      (newValueSet: Set<string>) => {
        if (disabled) return

        newValueSet = new Set(newValueSet)

        if (!multiple) {
          setIsOpen(false)
        }

        if (onChangeProp) {
          const newValue = Array.from(newValueSet)
          onChangeProp(multiple ? newValue : newValue[0])
        }
      },
      [disabled, multiple, onChangeProp],
    )

    const contextValue = useMemo(() => {
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
        onClear() {
          onChange(new Set([]))
        },
      }
    }, [valueSet, onChange, multiple])

    const handleClear = useCallback(
      (e: MouseEvent<HTMLLIElement>) => {
        e.stopPropagation()
        contextValue.onClear()
      },
      [contextValue],
    )

    const theme = useTheme()

    const { shouldMount, stage } = useTransition(
      isOpen,
      theme.transition.duration.fast,
    )

    const optionsIsOpen = stage === 'enter'

    useClickOutside(close, [inputRef, menuRef], [shouldMount])

    return (
      <DropdownContext.Provider value={contextValue}>
        <StyledInputWrapper>
          {label && <FormLabel {...{ label, error, required }} />}
          <StyledDropdown
            tabIndex={-1}
            {...{ ref: inputRef, onClick, isOpen, error, disabled, ...rest }}
          >
            {selectedText}
            <StyledDropdownIcon />
            <Portal>
              {shouldMount && (
                <StyledDropdownOptionMenu
                  {...{
                    ref: menuRef,
                  }}
                  isOpen={optionsIsOpen}
                  size={size}
                >
                  {!multiple && (
                    <DropdownOption value="" onClick={handleClear}>
                      {placeholder}
                    </DropdownOption>
                  )}
                  {children}
                </StyledDropdownOptionMenu>
              )}
            </Portal>
          </StyledDropdown>
          {error && <FormError error={error} />}
        </StyledInputWrapper>
      </DropdownContext.Provider>
    )
  },
)
Dropdown.displayName = 'Dropdown'

export default memo(Dropdown) as typeof Dropdown
