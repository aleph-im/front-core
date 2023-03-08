import React, { ForwardedRef, forwardRef, useCallback, useMemo, useState } from 'react'
import Icon from '../../Icon'
import { StyledTextInputLabel, StyledTextInputWrapper } from '../styles.forms'
import { StyledTextInputInfo, StyledTextInputField, StyledTextInputContainer as StyledTextInputContainer } from './styles'
import { TextInputProps } from './types'

export const TextInput = forwardRef(({
  name,
  label,
  className,
  focus,
  error,
  button,
  buttonStyle = 'wrapped',
  placeholder = name,
  ...rest
}: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const [isFocus, setIsFocus] = useState(focus)
  const handleFocus = useCallback(() => setIsFocus(true), [setIsFocus])
  const handleBlur = useCallback(() => setIsFocus(false), [setIsFocus])

  const isFocusClass = useMemo(() => isFocus || focus ? '_focus' : '', [isFocus, focus])

  // @note: Storybook testing purposes
  const classes = useMemo(() => isFocusClass + (className || ''), [isFocusClass, className])

  return (
    <StyledTextInputWrapper>
      {label && <StyledTextInputLabel>{label}</StyledTextInputLabel>}
      <StyledTextInputContainer {...{ button, buttonStyle, className: isFocusClass }}>
        <StyledTextInputField
          {...{
            ref,
            button,
            buttonStyle,
            placeholder,
            className: classes,
            onFocus: handleFocus,
            onBlur: handleBlur,
            ...rest,
          }} />
        {button}
      </StyledTextInputContainer>
      {error && <StyledTextInputInfo error={error}>
        <Icon name={error.type === 'warn' ? 'bomb' : 'warning'} className='mr-xxs' />
        {error.message}
      </StyledTextInputInfo>}
    </StyledTextInputWrapper>
  )
})

TextInput.displayName = 'TextInput'

export default TextInput
