import styled from 'styled-components'
import { LabelProps } from './types'
import { addClasses } from '../../../utils'

export const StyledLabel = styled.span.attrs(addClasses('tp-info'))<LabelProps>`
  vertical-align: top;
  color: #fff;
`
