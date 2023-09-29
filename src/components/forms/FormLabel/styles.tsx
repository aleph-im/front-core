import styled from 'styled-components'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import { FormLabelProps } from './types'
import { errorCss } from '../styles.forms'
import { FormError } from '../FormError/types'

export const StyledContainer = styled.span.attrs(
  addClasses('tp-body'),
)<FormLabelProps>`
  ${tw`block mb-2.5!`}
  ${errorCss}
`

export const StyledRequiredSymbol = styled.span.attrs<{ error?: FormError }>(
  ({ error, ...rest }) => {
    const color = error ? '' : 'text-main0'
    return addClasses(`tp-body ${color}`)(rest)
  },
)<{ error?: FormError }>`
  ${tw`align-top`}
`
