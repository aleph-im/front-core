import styled from 'styled-components'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import { FormLabelProps } from './types'
import { errorCss } from '../styles.forms'

export const StyledContainer = styled.span.attrs(
  addClasses('tp-body'),
)<FormLabelProps>`
  ${tw`block mb-2.5!`}
  ${errorCss}
`

export const StyledRequiredSymbol = styled.span.attrs(
  addClasses('tp-body text-main0'),
)`
  ${tw`align-top`}
`
