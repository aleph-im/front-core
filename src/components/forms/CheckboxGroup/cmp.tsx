import React, { ChangeEvent, useId, useMemo, memo } from 'react'
import FormError from '../FormError'
import { CheckboxGroupContext } from './context'
import { StyledCheckboxGroupContainer, StyledCheckboxContainer } from './styles'
import { CheckboxGroupProps } from './types'
import FormLabel from '../FormLabel'

export const CheckboxGroup = memo(
  ({
    id,
    name: nameProp,
    value,
    onChange: onChangeProp,
    label,
    direction,
    children,
    error,
    required,
    ...rest
  }: CheckboxGroupProps) => {
    const rndId = useId()
    id = id || rndId

    const name = nameProp || id

    const valueSet = useMemo(() => new Set(value), [value])

    const contextValue = useMemo(
      () => ({
        name: name,
        value: Array.from(valueSet),
        valueSet,
        onChange(e: ChangeEvent<HTMLInputElement>) {
          const checked = e.target.checked
          const value = e.target.value

          checked ? valueSet.add(value) : valueSet.delete(value)

          const newValue = new Set(valueSet)
          onChangeProp && onChangeProp(e, Array.from(newValue))
        },
      }),
      [name, valueSet, onChangeProp],
    )

    return (
      <CheckboxGroupContext.Provider value={contextValue}>
        <StyledCheckboxGroupContainer {...{ direction, ...rest }}>
          {label && <FormLabel {...{ label, error, required }} />}
          <StyledCheckboxContainer direction={direction}>
            {children}
          </StyledCheckboxContainer>
          {error && <FormError error={error} />}
        </StyledCheckboxGroupContainer>
      </CheckboxGroupContext.Provider>
    )
  },
)
CheckboxGroup.displayName = 'CheckboxGroup'

export default CheckboxGroup
