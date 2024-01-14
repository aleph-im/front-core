import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import {
  fieldDisabledCss,
  fieldErrorCss,
  fieldPlaceholderCss,
} from '../styles.forms'
import Icon from '../../common/Icon'
import tw from 'twin.macro'

export const StyledContainer = styled.div`
  ${tw`relative`}
  ${fieldDisabledCss}
`

export const StyledSelect = styled.select.attrs(addClasses('tp-form'))`
  ${({ theme }) => {
    const { background, shadow, border, color } = theme.form.input
    const { duration, timing } = theme.transition

    const borderSize = Math.max(
      border.size,
      border.focus.size,
      border.feedback.size,
    )

    const paddingYSize = 0.5 - borderSize
    const paddingXSize = 2 - borderSize

    return css`
      display: block;
      width: 100%;
      max-width: 100%;
      appearance: none;
      outline: 0;
      background: ${background};
      color: ${color};
      box-shadow: ${shadow};
      border: ${borderSize}rem solid transparent;
      transition: border ${timing} ${duration.fast}ms 0ms;
      border-radius: 1.875rem;
      padding: ${paddingYSize}rem ${paddingXSize}rem;
      padding-right: ${paddingXSize * 2}rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-height: 2.625rem;
      margin: 0;

      /* Remove default arrow IE*/
      &::-ms-expand {
        display: none;
      }

      &[multiple] {
        background-image: none;
        padding: 0;
        overflow-y: auto;
      }

      &:focus {
        border: ${border.focus.size}rem solid ${border.color};
      }

      ${fieldPlaceholderCss}

      ${fieldErrorCss}
    `
  }}
`

export const StyledDropdownIcon = styled(Icon).attrs(() => {
  return {
    name: 'chevron-down',
    size: 'lg',
  }
})(() => [tw`absolute top-1/2 right-6 -mt-2`])

export const StyledOption = styled.option`
  ${({ theme }) => {
    const { option } = theme.form.select

    return css`
      appearance: none;
      outline: 0;
      cursor: pointer;
      padding: 0.875rem;
      min-height: 2.75em;
      width: 100%;
      border-bottom: ${option.border};
      background: ${option.background};
      color: ${option.color};
      font-weight: 700;

      ${StyledSelect}[multiple] & {
        text-align: center;
      }

      &:last-child {
        border-bottom: none;
      }

      &:checked {
        box-shadow: ${option.selected.shadow};
        background: ${option.selected.background} !important;
        color: ${option.selected.color};
      }
    `
  }}
`
