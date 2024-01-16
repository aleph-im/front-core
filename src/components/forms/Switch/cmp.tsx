import React, { forwardRef, ForwardedRef, memo } from 'react'
import {
  StyledSwitchContainer,
  StyledInput,
  StyledLabel,
  StyledInputContainer,
  StyledInputDot,
} from './styles'
import { SwitchProps } from './types'
import { useSwitchComponent } from './hook'

export const Switch = forwardRef(
  (props: SwitchProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { className, id, label, disabled, ...rest } =
      useSwitchComponent(props)

    return (
      <StyledSwitchContainer {...{ className }}>
        <StyledInputContainer>
          <StyledInput
            {...{
              type: 'checkbox',
              id,
              ref,
              disabled,
              ...rest,
            }}
          />
          <StyledInputDot />
        </StyledInputContainer>
        {label && (
          <StyledLabel {...{ htmlFor: id, $disabled: disabled }}>
            {label}
          </StyledLabel>
        )}
      </StyledSwitchContainer>
    )
  },
)
Switch.displayName = 'Switch'

export default memo(Switch) as typeof Switch
