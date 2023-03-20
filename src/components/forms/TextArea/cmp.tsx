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
  // @note: Storybook testing purposes
  const classes = useMemo(() => {
    return [
      focus ? '_focus' : '',
    ].join(' ') + (className || '')
  }, [focus, className])

  return (
    <StyledInputWrapper>
      {label && <StyledFormLabel>{label}</StyledFormLabel>}
      <StyledTextAreaField
        {...{
          ref,
          placeholder,
          className: classes,
          ...rest,
        }}
      />
      {error && <FormError error={error} />}
    </StyledInputWrapper>
  )
})

TextArea.displayName = 'TextArea'

export default TextArea
