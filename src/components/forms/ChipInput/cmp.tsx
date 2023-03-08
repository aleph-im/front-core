import React, { useState, useCallback, forwardRef, ForwardedRef } from 'react'
import { useElementHeight, useForwardRef } from '../../../hooks'
import Icon from '../../Icon'
import { StyledTextInputLabel, StyledTextInputWrapper } from '../styles.forms'
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
  onAdd,
  onRemove
}: ChipInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const [inputValue, setInputValue] = useState('')
  const [tags, setTags] = useState<string[]>([])

  const reff = useForwardRef(ref)
  const [containerRef, containerHeight] = useElementHeight<HTMLDivElement>([tags])
  const [inputRef, inputHeight] = useElementHeight([], reff)
  const isBig = containerHeight >= inputHeight*2

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleRemoveTag = useCallback((tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove)
    setTags(updatedTags)
  }, [tags, setTags])

  const handleInputKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = inputValue.trim()

    if (event.key === 'Enter' && value !== '') {
      const newTags = [...tags.filter((tag) => tag !== value), value]
      setTags(newTags)
      setInputValue('')
      onAdd && onAdd(value)
      return
    }

    if (event.key === 'Backspace' && value === '') {
      const lastTag = tags[tags.length - 1]
      handleRemoveTag(lastTag)
      onRemove && onRemove(lastTag)
    }
  }, [inputValue, tags, setTags, setInputValue, onAdd, onRemove, handleRemoveTag])

  return (
    <StyledTextInputWrapper>
      {label && <StyledTextInputLabel>{label}</StyledTextInputLabel>}
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
    </StyledTextInputWrapper>
  )
})

ChipInput.displayName = 'ChipInput'

export default ChipInput
