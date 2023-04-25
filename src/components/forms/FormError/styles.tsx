import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import { FormErrorProps } from './types'

export const StyledFormErrorContainer = styled.span.attrs(
  addClasses('tp-body'),
)<FormErrorProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  && {
    margin-top: 0.75rem;
  }

  ${({ error }) => {
    if (error.type === 'warn') {
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
