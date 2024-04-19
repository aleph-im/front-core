import React, { ForwardedRef, forwardRef, memo, useMemo } from 'react'
import FormError from '../FormError'
import { StyledInputWrapper } from '../styles.forms'
import { StyledContainer, StyledIcon, StyledTextAreaField } from './styles'
import { TextAreaProps } from './types'
import FormLabel from '../FormLabel'
import { useCopyToClipboardAndNotify } from '../../../hooks/useCopyToClipboard'

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

    const handleCopy = useCopyToClipboardAndNotify(rest.value + '')

    return (
      <StyledInputWrapper>
        {label && <FormLabel {...{ label, error, required }} />}
        <StyledContainer>
          {variant === 'code' && rest.value && (
            <StyledIcon onClick={handleCopy} />
          )}
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
        </StyledContainer>
        {error && <FormError error={error} />}
      </StyledInputWrapper>
    )
  },
)
TextArea.displayName = 'TextArea'

export default memo(TextArea) as typeof TextArea
