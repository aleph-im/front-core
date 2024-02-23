import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import { StyledContainer as StyledInputContainer } from '../TextInput/styles'
import { fieldPlaceholderCss } from '../styles.forms'
import tw from 'twin.macro'

export const StyledContainer = styled(StyledInputContainer)`
  flex-wrap: wrap;
  border-radius: 1.375rem;
  padding: 0.4375rem 0.5rem;
  min-height: 2.75rem;
`

export const StyledChipContainer = styled.div`
  ${tw`inline-flex flex-wrap items-center self-stretch max-w-full overflow-hidden gap-x-1.5 gap-y-3`}
`

export const StyledChip = styled.span`
  ${({ theme }) => {
    const { background, color, fontWeight } = theme.form.chip

    return css`
      ${tw`inline-flex items-center justify-between max-w-full`}
      background: ${background};
      color: ${color};
      border-radius: 1.875rem;
      height: 1.75rem;
      padding: 0.125rem 1.125rem;
      font-weight: ${fontWeight};
    `
  }}
`

export const StyledChipTag = styled.span`
  margin-right: 0.25rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const StyledChipRemoveButton = styled.button`
  ${({ theme }) => {
    const { color } = theme.form.chip

    return css`
      border: none;
      cursor: pointer;
      color: ${color};
      background-color: transparent;
      line-height: 0;
      padding: 0;
      margin: 0;
      margin-left: 0.625rem;
      transition-property: transform;
      transition-duration: ${theme.transition.duration.fast}ms;
      transition-timing-function: ${theme.transition.timing};

      &:hover {
        transform: scale(1.2);
      }
    `
  }}
`

export const StyledInput = styled.input.attrs(addClasses('tp-form'))`
  ${({ theme }) => {
    return css`
      flex: 1 1 auto;
      padding: 0 0.5rem;
      min-height: 1.625rem;
      border: none;
      outline: none;
      color: ${theme.color.text};
      background-color: transparent;

      ${fieldPlaceholderCss}
    `
  }}
`
