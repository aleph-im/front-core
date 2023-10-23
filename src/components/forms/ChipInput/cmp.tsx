/* eslint-disable react/prop-types */
import React, {
  useState,
  useCallback,
  forwardRef,
  ForwardedRef,
  memo,
  FocusEvent,
  useMemo,
} from 'react'
import { useBounds, useForwardRef, useWindowSize } from '../../../hooks'
import Icon from '../../Icon'
import { StyledInputWrapper } from '../styles.forms'
import {
  StyledChip,
  StyledChipContainer,
  StyledChipTag,
  StyledChipRemoveButton,
  StyledContainer,
  StyledInput,
} from './styles'
import { ChipInputProps, ChipItemProps } from './types'
import FormLabel from '../FormLabel'
import FormError from '../FormError'

const ChipItem = memo(({ tag, onRemove }: ChipItemProps) => {
  const handleRemove = useCallback(() => onRemove(tag), [tag, onRemove])

  return (
    <StyledChip key={tag}>
      <StyledChipTag>{tag}</StyledChipTag>
      <StyledChipRemoveButton onClick={handleRemove}>
        <Icon name="xmark" />
      </StyledChipRemoveButton>
    </StyledChip>
  )
})
ChipItem.displayName = 'ChipItem'

export const ChipInput = memo(
  forwardRef(
    (
      {
        placeholder = 'Filter',
        label,
        error,
        value,
        onAdd,
        onRemove,
        onChange,
        onFocus: onFocusProp,
        onBlur: onBlurProp,
        required,
        focus,
        className,
      }: ChipInputProps,
      ref: ForwardedRef<HTMLInputElement>,
    ) => {
      const reff = useForwardRef(ref)

      const [inputValue, setInputValue] = useState('')

      const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
      ) => {
        setInputValue(event.target.value)
      }

      const handleRemoveTag = useCallback(
        (tagToRemove: string) => {
          if (!value) return

          const updatedTags = value.filter((tag) => tag !== tagToRemove)

          onRemove && onRemove(tagToRemove)
          onChange && onChange(updatedTags)

          reff.current.focus()
        },
        [value, onRemove, onChange, reff],
      )

      const handleInputKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
          const newTag = inputValue.trim()

          if (event.key === 'Enter' && newTag !== '') {
            event.preventDefault()

            const newTags = [
              ...(value || []).filter((tag) => tag !== newTag),
              newTag,
            ]

            setInputValue('')
            onAdd && onAdd(newTag)
            onChange && onChange(newTags)

            return
          }

          if (event.key === 'Backspace' && newTag === '') {
            if (!value) return

            const lastTag = value[value.length - 1]
            handleRemoveTag(lastTag)
          }
        },
        [inputValue, value, onAdd, onChange, handleRemoveTag],
      )

      // ----------------------------

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
          <StyledContainer error={error} className={classes}>
            {value && (
              <StyledChipContainer>
                {value.map((tag) => (
                  <ChipItem key={tag} {...{ tag, onRemove: handleRemoveTag }} />
                ))}
              </StyledChipContainer>
            )}
            <StyledInput
              ref={reff}
              type="text"
              placeholder={placeholder}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </StyledContainer>
          {error && <FormError error={error} />}
        </StyledInputWrapper>
      )
    },
  ),
)
ChipInput.displayName = 'ChipInput'

export default ChipInput
