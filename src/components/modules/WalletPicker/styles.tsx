import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'

export const StyledPicker = styled.div`
  ${({ theme }) => {
    const { background, shadow } = theme.component.walletPicker

    return css`
      position: relative;
      width: 20rem;
      border-radius: 1.875rem;
      background: ${background};
      z-index: 1;
      padding: 1.5rem;
      box-shadow: ${shadow};
      backdrop-filter: blur(50px);
    `
  }}
`

export const StyledTitle = styled.h6.attrs(addClasses('tp-nav'))`
  ${({ theme }) => {
    const { color } = theme.component.walletPicker

    return css`
      color: ${color.default};
      font-size: 1.125rem;
      margin: 0 0 2rem 0;
    `
  }}
`

export const BorderedDiv = styled.div`
  ${({ theme }) => {
    const { border } = theme.component.walletPicker

    return css`
      padding-top: 1.5rem;
      border-top: ${border.size}rem solid ${border.color};
    `
  }}
`
