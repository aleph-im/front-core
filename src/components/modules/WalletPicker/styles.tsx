import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'

export const StyledPicker = styled.div`
  ${({ theme }) => {
    return css`
      position: relative;
      width: 320px;
      border-radius: 1.875rem;
      background: ${theme.color.base0}0A;
      z-index: 1;
      padding: 1.5rem;
      box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(50px);
    `
  }}
`

export const StyledTitle = styled.h6.attrs(addClasses('tp-nav'))`
  ${({ theme }) => {
    return css`
      color: ${theme.color.base0};
      font-family: ${theme.typo.info.family};
      font-size: 1.125rem;
      margin: 0 0 2rem 0;
    `
  }}
`

export const BorderedDiv = styled.div`
  padding-top: 1.5rem;
  border-top: ${({ theme }) => `1px solid ${theme.color.base0}33`};
`
