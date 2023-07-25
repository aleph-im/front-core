import React, { ForwardedRef, forwardRef, useMemo } from 'react'
import FormError from '../FormError'
import { StyledInputWrapper } from '../styles.forms'
import { StyledTextAreaField } from './styles'
import { TextAreaProps } from './types'
import FormLabel from '../FormLabel'

export const TextArea = forwardRef(
  (
    {
      name,
      label,
      className,
      focus,
      error,
      placeholder = name,
      variant = 'default',
      ...rest
    }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    // @note: Storybook testing purposes
    const classes = useMemo(() => {
      return [focus ? '_focus' : ''].join(' ') + (className || '')
    }, [focus, className])

    return (
      <StyledInputWrapper>
        {label && <FormLabel label={label} error={error} />}
        <StyledTextAreaField
          {...{
            ref,
            placeholder,
            className: classes,
            $variant: variant,
            error,
            ...rest,
          }}
        />
        {error && <FormError error={error} />}
      </StyledInputWrapper>
    )
  },
)

TextArea.displayName = 'TextArea'

export default TextArea
