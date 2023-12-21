import React, {
  forwardRef,
  ForwardedRef,
  useCallback,
  ChangeEvent,
  useId,
  memo,
} from 'react'
import { useRadioGroup } from '../RadioGroup/context'
import {
  StyledRadioContainer,
  StyledInput,
  StyledLabel,
  StyledInputContainer,
  StyledInputDot,
} from './styles'
import { RadioProps } from './types'

export const Radio = forwardRef(
  (
    {
      id,
      label,
      name,
      value,
      checked,
      onChange: onChangeProp,
      className,
      size: $size,
      disabled,
      ...rest
    }: RadioProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const rndId = useId()
    id = id || rndId

    const group = useRadioGroup()

    const onChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onChangeProp && onChangeProp(e)
        group && group.onChange(e)
      },
      [group, onChangeProp],
    )

    if (group) {
      if (name === undefined) name = group.name
      if (checked === undefined) checked = group.value === value
    }

    return (
      <StyledRadioContainer {...{ className, $size }}>
        <StyledInputContainer {...{ $size }}>
          <StyledInput
            {...{
              type: 'radio',
              id,
              ref,
              name,
              value,
              checked,
              onChange,
              disabled,
              ...rest,
            }}
          />
          <StyledInputDot />
        </StyledInputContainer>
        {label && (
          <StyledLabel {...{ htmlFor: id, $size, $disable: disabled }}>
            {label}
          </StyledLabel>
        )}
      </StyledRadioContainer>
    )
  },
)
Radio.displayName = 'Radio'

export default memo(Radio) as typeof Radio
