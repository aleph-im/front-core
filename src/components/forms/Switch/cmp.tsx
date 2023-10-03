import React, { forwardRef, ForwardedRef } from 'react'
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
    const { className, id, label, ...rest } = useSwitchComponent(props)

    return (
      <StyledSwitchContainer {...{ className }}>
        <StyledInputContainer {...{ label }}>
          <StyledInput
            {...{
              type: 'checkbox',
              id,
              ref,
              ...rest,
            }}
          />
          <StyledInputDot />
        </StyledInputContainer>
        {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      </StyledSwitchContainer>
    )
  },
)

Switch.displayName = 'Switch'

export default Switch
