import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import tw from 'twin.macro'
import TextGradient from '../../common/TextGradient'

export type StyledNumberProps = { $color: string }

export const StyledNumber = styled.span.attrs(
  addClasses('tp-body1 fs-28'),
)<StyledNumberProps>`
  ${({ theme, $color }) => {
    const color = theme.color[$color] || $color

    return css`
      ${tw`inline`}
      color: ${color};
    `
  }}
`

export const StyledTextGradient = styled(TextGradient).attrs((props) => {
  return {
    ...props,
    forwardedAs: 'span',
  }
})`
  ${tw`inline`}
`

export type StyledLabelProps = { $color: string }

export const StyledLabel = styled.span.attrs(
  addClasses('tp-info'),
)<StyledLabelProps>`
  ${({ theme, $color }) => {
    const color = theme.color[$color] || $color

    return css`
      ${tw`align-top`}
      color: ${color};
    `
  }}
`
