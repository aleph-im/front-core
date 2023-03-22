import React, { forwardRef, ForwardedRef, useCallback, ChangeEvent, useId } from 'react'
import { useRadioGroup } from '../RadioGroup/context'
import { StyledRadioContainer, StyledInput, StyledLabel, StyledInputContainer, StyledInputDot } from './styles'
import { RadioProps } from './types'

export const Radio = forwardRef(({
  id,
  label,
  name,
  value,
  checked,
  onChange: onChangeProp,
  className,
  ...rest
}: RadioProps, ref: ForwardedRef<HTMLInputElement>) => {
  const rndId = useId()
  id = id || rndId

  const group = useRadioGroup()

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChangeProp && onChangeProp(e)
    group && group.onChange(e)
  }, [group, onChangeProp])

  if (group) {
    if (name === undefined) name = group.name
    if (checked === undefined) checked = group.value === value
  }

  return (
    <StyledRadioContainer {...{ className }}>
      <StyledInputContainer>
        <StyledInput {...{
          type: "radio",
          id,
          ref,
          name,
          value,
          checked,
          onChange,
          ...rest
        }} />
        <StyledInputDot />
      </StyledInputContainer>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
    </StyledRadioContainer>
  )
})

Radio.displayName = 'Radio'

export default Radio
