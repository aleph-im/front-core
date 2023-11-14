import React, {
  FocusEvent,
  ForwardedRef,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react'
import FormError from '../FormError'
import { StyledInputWrapper } from '../styles.forms'
import {
  StyledInput,
  StyledContainer,
  StyledRightContent,
  StyledLeftContent,
} from './styles'
import { ButtonProps, TextInputProps } from './types'
import FormLabel from '../FormLabel'
import Button from '../../common/Button'

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
      icon,
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
        <StyledContainer
          {...{
            $hasButton: !!button,
            className: isFocusClass,
            error,
            disabled,
          }}
        >
          {icon && (
            <StyledLeftContent
              {...{
                $isFilled: !!rest.value,
                disabled,
              }}
            >
              {icon}
            </StyledLeftContent>
          )}
          <StyledInput
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
          {button && (
            <StyledRightContent $style={buttonStyle}>
              {isValidElement(button) && button.type === Button
                ? cloneElement(button, { disabled } as ButtonProps)
                : button}
            </StyledRightContent>
          )}
        </StyledContainer>
        {error && <FormError error={error} />}
      </StyledInputWrapper>
    )
  },
)

TextInput.displayName = 'TextInput'

export default memo(TextInput)
