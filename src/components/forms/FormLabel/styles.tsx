import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import { errorCss } from '../styles.forms'
import { FormError } from '../FormError/types'

export const StyledRequiredSymbol = styled.span``

export type StyledContainerProps = {
  error?: FormError
  required?: boolean
}

export const StyledContainer = styled.span.attrs(
  addClasses('tp-body'),
)<StyledContainerProps>`
  ${({ theme, error }) => {
    return css`
      ${tw`block mb-2.5!`}
      ${errorCss}

      & ${StyledRequiredSymbol} {
        ${tw`align-top`}
        color: ${error ? 'inherit' : theme.form.feedback.required};
      }
    `
  }}
`
