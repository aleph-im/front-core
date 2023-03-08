import styled from "styled-components"
import { getTypoCss } from "../../styles"

export const StyledTextInputWrapper = styled.div`
  max-width: 100%;
  min-width: 200px;
`

export const StyledTextInputLabel = styled.label`
  display: block;
  margin-bottom: 0.75rem;
  ${getTypoCss('body')}
`