import React, { ForwardedRef, forwardRef, memo, useMemo } from 'react'
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
      required,
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
        {label && <FormLabel {...{ label, error, required }} />}
        <StyledTextAreaField
          {...{
            ref,
            placeholder,
            className: classes,
            $variant: variant,
            error,
            required,
            ...rest,
          }}
        />
        {error && <FormError error={error} />}
      </StyledInputWrapper>
    )
  },
)
TextArea.displayName = 'TextArea'

export default memo(TextArea)
