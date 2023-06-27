import React, {
  forwardRef,
  ForwardedRef,
  useCallback,
  ChangeEvent,
  useId,
} from 'react'
import { useCheckboxGroup } from '../CheckboxGroup/context'
import {
  StyledCheckboxContainer,
  StyledInput,
  StyledLabel,
  StyledInputContainer,
  StyledCheckIcon,
} from './styles'
import { CheckboxProps } from './types'

export const Checkbox = forwardRef(
  (
    {
      id,
      label,
      name,
      value,
      checked,
      className,
      onChange: onChangeProp,
      ...rest
    }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const rndId = useId()
    id = id || rndId

    const group = useCheckboxGroup()

    const onChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onChangeProp && onChangeProp(e)
        group && group.onChange(e)
      },
      [group, onChangeProp],
    )

    if (group) {
      if (name === undefined) name = group.name
      if (checked === undefined) checked = group.valueSet.has(value)
    }

    return (
      <StyledCheckboxContainer {...{ className }}>
        <StyledInputContainer {...{ label }}>
          <StyledInput
            {...{
              type: 'checkbox',
              id,
              ref,
              name,
              value,
              checked,
              onChange,
              ...rest,
            }}
          />
          <StyledCheckIcon />
        </StyledInputContainer>
        {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      </StyledCheckboxContainer>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
