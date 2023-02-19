import styled, { css } from 'styled-components'
import { pxToRem } from '../../../../styles'
import { StyledHeaderProps } from './types'

export const StyledHeader = styled.header<StyledHeaderProps>`
  ${(props) => {
    const { theme } = props

    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      height: 104px;
      font-size: 1rem;
      padding: 30px 24px;
      padding: ${pxToRem(30)}rem ${theme.font.size.lg}rem;
      margin: 0;
    `
  }}
`
