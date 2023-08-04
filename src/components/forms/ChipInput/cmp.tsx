/* eslint-disable react/prop-types */
import React, {
  useState,
  useCallback,
  forwardRef,
  ForwardedRef,
  memo,
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
      }: ChipInputProps,
      ref: ForwardedRef<HTMLInputElement>,
    ) => {
      const [inputValue, setInputValue] = useState('')

      const windowSize = useWindowSize()

      const reff = useForwardRef(ref)
      const [containerSize, containerRef] = useBounds<HTMLDivElement>(
        undefined,
        undefined,
        [value, windowSize],
      )
      const [inputSize, inputRef] = useBounds(undefined, reff, [
        value,
        windowSize,
      ])

      const containerHeight = containerSize?.height || 0
      const inputHeight = inputSize?.height || 0
      const isBig = containerHeight >= inputHeight * 2

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
        },
        [value, onRemove, onChange],
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

      return (
        <StyledInputWrapper>
          {label && <FormLabel label={label} error={error} />}
          <StyledContainer ref={containerRef} isBig={isBig} error={error}>
            {value && (
              <StyledChipContainer isBig={isBig}>
                {value.map((tag) => (
                  <ChipItem
                    key={tag}
                    {...{ tag, isBig, onRemove: handleRemoveTag }}
                  />
                ))}
              </StyledChipContainer>
            )}
            <StyledInput
              ref={inputRef}
              type="text"
              placeholder={placeholder}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              isBig={isBig}
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
