import React, { memo } from 'react'
import FormError from '../FormError'
import { SwitchGroupContext } from './context'
import { StyledSwitchGroupContainer, StyledSwitchContainer } from './styles'
import { SwitchGroupProps } from './types'
import FormLabel from '../FormLabel'
import { useSwitchGroupComponent } from './hook'

export const SwitchGroup = (props: SwitchGroupProps) => {
  const { contextValue, children, direction, error, label, required, ...rest } =
    useSwitchGroupComponent(props)

  return (
    <SwitchGroupContext.Provider value={contextValue}>
      <StyledSwitchGroupContainer {...{ direction, ...rest }}>
        {label && <FormLabel {...{ label, error, required }} />}
        <StyledSwitchContainer direction={direction}>
          {children}
        </StyledSwitchContainer>
        {error && <FormError error={error} />}
      </StyledSwitchGroupContainer>
    </SwitchGroupContext.Provider>
  )
}
SwitchGroup.displayName = 'SwitchGroup'

export default memo(SwitchGroup) as typeof SwitchGroup
