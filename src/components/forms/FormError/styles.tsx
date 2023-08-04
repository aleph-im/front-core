import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import { FormErrorProps } from './types'
import { errorCss } from '../styles.forms'

export const StyledFormErrorContainer = styled.span.attrs(
  addClasses('tp-body'),
)<FormErrorProps>`
  ${tw`flex items-center justify-start mt-2.5!`}
  ${errorCss}
`
