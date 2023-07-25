import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import { FormLabelProps } from './types'

export const StyledFormLabelContainer = styled.span.attrs(
  addClasses('tp-body'),
)<FormLabelProps>`
  ${tw`block mb-2.5!`}

  ${({ error }) => {
    if (!error) return ''

    if (error.level === 'warn') {
      return css`
        color: #ffd179;
      `
    } else {
      return css`
        color: #d92446;
      `
    }
  }}
`
