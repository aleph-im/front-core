import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import { FormErrorProps } from './types'

export const StyledFormErrorContainer = styled.span.attrs(
  addClasses('tp-body'),
)<FormErrorProps>`
  ${tw`flex items-center justify-start mt-2.5!`}

  ${({ error }) => {
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
