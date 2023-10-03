import React, { memo } from 'react'
import FormError from '../FormError'
import { CheckboxGroupContext } from './context'
import { StyledCheckboxGroupContainer, StyledCheckboxContainer } from './styles'
import { CheckboxGroupProps } from './types'
import FormLabel from '../FormLabel'
import { useCheckboxGroupComponent } from './hook'

export const CheckboxGroup = memo((props: CheckboxGroupProps) => {
  const { contextValue, children, direction, error, label, required, ...rest } =
    useCheckboxGroupComponent(props)

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
})
CheckboxGroup.displayName = 'CheckboxGroup'

export default CheckboxGroup
