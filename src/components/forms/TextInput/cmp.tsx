import React, {
  FocusEvent,
  ForwardedRef,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'
import FormError from '../FormError'
import { StyledInputWrapper } from '../styles.forms'
import { StyledTextInputField, StyledTextInputContainer } from './styles'
import { TextInputProps } from './types'
import FormLabel from '../FormLabel'

export const TextInput = forwardRef(
  (
    {
      name,
      label,
      className,
      focus,
      error,
      disabled,
      button,
      buttonStyle = 'wrapped',
      placeholder = name,
      onFocus: onFocusProp,
      onBlur: onBlurProp,
      required,
      ...rest
    }: TextInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [isFocus, setIsFocus] = useState(focus)

    const handleFocus = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        setIsFocus(true)
        onFocusProp && onFocusProp(e)
      },
      [onFocusProp],
    )

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        setIsFocus(false)
        onBlurProp && onBlurProp(e)
      },
      [onBlurProp],
    )

    const isFocusClass = useMemo(
      () => (isFocus || focus ? '_focus' : ''),
      [isFocus, focus],
    )

    // @note: Storybook testing purposes
    const classes = useMemo(
      () => (className ? `${className} ${isFocusClass}` : isFocusClass),
      [isFocusClass, className],
    )

    return (
      <StyledInputWrapper>
        {label && <FormLabel {...{ label, error, required }} />}
        <StyledTextInputContainer
          {...{ button, buttonStyle, error, className: isFocusClass, disabled }}
        >
          <StyledTextInputField
            {...{
              ref,
              button,
              buttonStyle,
              placeholder,
              className: classes,
              name,
              disabled,
              required,
              ...rest,
              onFocus: handleFocus,
              onBlur: handleBlur,
            }}
          />
          {button}
        </StyledTextInputContainer>
        {error && <FormError error={error} />}
      </StyledInputWrapper>
    )
  },
)

TextInput.displayName = 'TextInput'

export default TextInput
