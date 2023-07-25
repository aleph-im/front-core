import styled from 'styled-components'
import { FormError } from './FormError/types'

export type StyledInputWrapperProps = {
  error?: FormError
}

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  max-width: 100%;
  min-width: 12.5rem;
`
