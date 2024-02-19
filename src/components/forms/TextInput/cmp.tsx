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
  StyledLeftContent,
  StyledOuterContainer,
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
      button,
      buttonStyle = 'wrapped',
      placeholder = name,
      disabled: disabledProp,
      onFocus: onFocusProp,
      onBlur: onBlurProp,
      required,
      icon,
      dataView,
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

    const disabled = dataView ? true : disabledProp
    const $dataView = dataView ? (disabledProp ? 1 : 2) : undefined

    const buttonComponent =
      button &&
      (isValidElement(button) && button.type === Button
        ? cloneElement(button, { disabled } as ButtonProps)
        : button)

    return (
      <StyledInputWrapper>
        {label && <FormLabel {...{ label, error, required }} />}
        <></>
        <StyledOuterContainer
          {...{
            $hasButton: !!button,
            $buttonStyle: buttonStyle,
          }}
        >
          <StyledContainer
            {...{
              $hasButton: !!button,
              className: isFocusClass,
              $dataView,
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
                $dataView,
                ...rest,
                onFocus: handleFocus,
                onBlur: handleBlur,
              }}
            />
            {buttonStyle === 'wrapped' && buttonComponent}
          </StyledContainer>
          {buttonStyle === 'stuck' && buttonComponent}
        </StyledOuterContainer>
        {error && <FormError error={error} />}
      </StyledInputWrapper>
    )
  },
)
TextInput.displayName = 'TextInput'

export default memo(TextInput) as typeof TextInput
