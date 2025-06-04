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
  StyledSpinnerContainer,
} from './styles'
import { ButtonProps, TextInputProps } from './types'
import FormLabel from '../FormLabel'
import Button from '../../common/Button'
import Spinner from '../../common/Spinner'

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
      width,
      textAlign = 'left',
      loading,
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

    const disabled = dataView ? true : disabledProp || loading
    const $dataView = dataView ? (disabledProp ? 1 : 2) : undefined

    const buttonComponent =
      button &&
      (isValidElement(button) && button.type === Button
        ? cloneElement(button, { disabled } as ButtonProps)
        : button)

    return (
      <StyledInputWrapper $width={width}>
        {label && <FormLabel {...{ label, error, required }} />}
        <></>
        <StyledOuterContainer
          {...{
            $hasButton: !!button,
            $buttonStyle: buttonStyle,
            $width: width,
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
                placeholder: loading ? '' : placeholder,
                className: classes,
                name,
                disabled,
                required,
                $dataView,
                $textAlign: textAlign,
                ...rest,
                onFocus: handleFocus,
                onBlur: handleBlur,
              }}
            />
            {loading && !rest.value && (
              <StyledSpinnerContainer $hasIcon={!!icon} $textAlign={textAlign}>
                <Spinner size="3em" color="main0" />
              </StyledSpinnerContainer>
            )}
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
