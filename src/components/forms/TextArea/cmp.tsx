import React, { ForwardedRef, forwardRef, useCallback, useMemo, useState } from 'react'
import FormError from '../FormError'
import { StyledFormLabel, StyledInputWrapper } from '../styles.forms'
import { StyledTextAreaField } from './styles'
import { TextAreaProps } from './types'

export const TextArea = forwardRef(({
  name,
  label,
  className,
  focus,
  error,
  placeholder = name,
  ...rest
}: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  const [isFocus, setIsFocus] = useState(focus)
  const handleFocus = useCallback(() => setIsFocus(true), [setIsFocus])
  const handleBlur = useCallback(() => setIsFocus(false), [setIsFocus])

  const isFocusClass = useMemo(() => isFocus || focus ? '_focus' : '', [isFocus, focus])

  // @note: Storybook testing purposes
  const classes = useMemo(() => isFocusClass + (className || ''), [isFocusClass, className])

  return (
    <StyledInputWrapper>
      {label && <StyledFormLabel>{label}</StyledFormLabel>}
      <StyledTextAreaField
        {...{
          ref,
          placeholder,
          className: classes,
          onFocus: handleFocus,
          onBlur: handleBlur,
          ...rest,
        }} />
      {error && <FormError error={error} />}
    </StyledInputWrapper>
  )
})

TextArea.displayName = 'TextArea'

export default TextArea
