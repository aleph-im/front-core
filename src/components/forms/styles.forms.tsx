import styled from 'styled-components'
import { addClasses } from '../../utils'
import tw from 'twin.macro'

export const StyledInputWrapper = styled.div`
  max-width: 100%;
  min-width: 12.5rem;
`

export const StyledFormLabel = styled.label.attrs(addClasses('tp-body'))(() => [
  tw`block mb-2.5`,
])
