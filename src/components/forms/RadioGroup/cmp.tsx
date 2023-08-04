import React, { ChangeEvent, memo, useId, useMemo } from 'react'
import FormError from '../FormError'
import { RadioGroupContext } from './context'
import { StyledRadioGroupContainer, StyledRadioContainer } from './styles'
import { RadioGroupProps } from './types'
import FormLabel from '../FormLabel'

export const RadioGroup = memo(
  ({
    id,
    name: nameProp,
    value,
    onChange: onChangeProp,
    label,
    direction,
    children,
    error,
    ...rest
  }: RadioGroupProps) => {
    const rndId = useId()
    id = id || rndId

    const name = nameProp || id

    const contextValue = useMemo(
      () => ({
        name,
        value,
        onChange(e: ChangeEvent<HTMLInputElement>) {
          const value = e.target.value
          onChangeProp && onChangeProp(e, value)
        },
      }),
      [name, onChangeProp, value],
    )

    return (
      <RadioGroupContext.Provider value={contextValue}>
        <StyledRadioGroupContainer {...{ direction, ...rest }}>
          {label && <FormLabel label={label} error={error} />}
          <StyledRadioContainer direction={direction}>
            {children}
          </StyledRadioContainer>
          {error && <FormError error={error} />}
        </StyledRadioGroupContainer>
      </RadioGroupContext.Provider>
    )
  },
)
RadioGroup.displayName = 'RadioGroup'

export default RadioGroup
