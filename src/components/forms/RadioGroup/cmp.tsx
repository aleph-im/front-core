import React, { ChangeEvent, useId, useMemo, useState } from 'react'
import FormError from '../FormError'
import { RadioGroupContext } from './context'
import { StyledRadioGroupContainer, StyledRadioContainer } from './styles'
import { RadioGroupProps } from './types'
import FormLabel from '../FormLabel'

export const RadioGroup = ({
  id,
  name,
  value,
  defaultValue,
  onChange: groupOnChange,
  label,
  direction,
  children,
  error,
  ...rest
}: RadioGroupProps) => {
  const rndId = useId()
  id = id || rndId

  const [groupValue, setGroupValue] = useState(defaultValue || value)
  const groupName = name || id

  const contextValue = useMemo(
    () => ({
      name: groupName,
      value: groupValue,
      onChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setGroupValue(value)
        groupOnChange && groupOnChange(e, value)
      },
    }),
    [groupName, groupValue, setGroupValue, groupOnChange],
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
}

export default RadioGroup
