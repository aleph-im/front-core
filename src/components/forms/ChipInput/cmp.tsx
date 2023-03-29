import React, { useState, useCallback, forwardRef, ForwardedRef } from 'react'
import { useBounds, useForwardRef } from '../../../hooks'
import Icon from '../../Icon'
import { StyledFormLabel, StyledInputWrapper } from '../styles.forms'
import { StyledChip, StyledChipContainer, StyledChipTag, StyledChipRemoveButton, StyledContainer, StyledInput } from './styles'
import { ChipInputProps, ChipItemProps } from './types'

const ChipItem = ({ tag, onRemove }: ChipItemProps) => {
  const handleRemove = useCallback(() => onRemove(tag), [tag, onRemove])

  return (
    <StyledChip key={tag}>
      <StyledChipTag>{tag}</StyledChipTag>
      <StyledChipRemoveButton onClick={handleRemove}>
        <Icon name='xmark' />
      </StyledChipRemoveButton>
    </StyledChip>
  )
}

export const ChipInput = forwardRef(({
  placeholder = 'Filter',
  label,
  defaultValue,
  value,
  onAdd,
  onRemove,
  onChange
}: ChipInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const [inputValue, setInputValue] = useState('')
  const [tags, setTags] = useState<string[]>(defaultValue || value || [])

  const reff = useForwardRef(ref)
  const [containerSize, containerRef] = useBounds<HTMLDivElement>(undefined, undefined, [tags])
  const [inputSize, inputRef] = useBounds(undefined, reff, [tags])

  const containerHeight = containerSize?.height || 0
  const inputHeight = inputSize?.height || 0
  const isBig = containerHeight >= inputHeight * 2

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleRemoveTag = useCallback((tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove)
    setTags(updatedTags)
    onRemove && onRemove(tagToRemove)
    onChange && onChange(updatedTags)
  }, [tags, setTags, onRemove, onChange])

  const handleInputKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = inputValue.trim()

    if (event.key === 'Enter' && value !== '') {
      const newTags = [...tags.filter((tag) => tag !== value), value]
      setTags(newTags)
      setInputValue('')
      onAdd && onAdd(value)
      onChange && onChange(newTags)
      return
    }

    if (event.key === 'Backspace' && value === '') {
      const lastTag = tags[tags.length - 1]
      handleRemoveTag(lastTag)
    }
  }, [inputValue, tags, setTags, setInputValue, onAdd, onRemove, handleRemoveTag])

  return (
    <StyledInputWrapper>
      {label && <StyledFormLabel>{label}</StyledFormLabel>}
      <StyledContainer ref={containerRef} isBig={isBig}>
        <StyledChipContainer isBig={isBig}>
          {tags.map((tag) => (
            <ChipItem
              key={tag}
              {...{ tag, isBig, onRemove: handleRemoveTag }}
            />
          ))}
        </StyledChipContainer>
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
    </StyledInputWrapper>
  )
})

ChipInput.displayName = 'ChipInput'

export default ChipInput
