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
  useRef,
  useEffect,
  useImperativeHandle,
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
      autoWidth,
      ...rest
    }: TextInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [isFocus, setIsFocus] = useState(focus)
    const [inputWidth, setInputWidth] = useState<number | undefined>(undefined)
    const inputRef = useRef<HTMLInputElement>(null)

    // Forward the ref to expose the input element
    useImperativeHandle(ref, () => inputRef.current!, [])

    // Function to measure text width using Canvas API
    const measureTextWidth = useCallback((text: string): number => {
      if (!inputRef.current) return 0

      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')!

      // Get computed styles from the input element
      const computedStyle = window.getComputedStyle(inputRef.current)
      context.font = `${computedStyle.fontSize} ${computedStyle.fontFamily}`

      const metrics = context.measureText(text)
      return Math.ceil(metrics.width)
    }, [])

    // Measure text width for autoWidth
    useEffect(() => {
      if (!autoWidth) return

      const content = (rest.value as string) || placeholder || ''
      const width = measureTextWidth(content)
      setInputWidth(width) // Add padding for cursor and breathing room
    }, [autoWidth, rest.value, placeholder, measureTextWidth])

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

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (autoWidth) {
          const content = e.target.value || placeholder || ''
          const width = measureTextWidth(content)
          setInputWidth(width + 16) // Add padding for cursor and breathing room
        }
        rest.onChange && rest.onChange(e)
      },
      [autoWidth, placeholder, measureTextWidth, rest],
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
              $autoWidth: autoWidth,
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
                ref: inputRef,
                button,
                buttonStyle,
                placeholder,
                className: classes,
                name,
                disabled,
                required,
                $dataView,
                $autoWidth: autoWidth,
                $width: inputWidth,
                ...rest,
                onChange: handleChange,
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
