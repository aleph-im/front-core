import styled, { css } from 'styled-components'
import { StyledLogoProps } from './types'
import tw from 'twin.macro'
import TextGradient from '../TextGradient'
import { addClasses } from '../../../utils'
import { getTypoCss } from '../../../styles/utils'

export const StyledLogoContainer = styled.span<StyledLogoProps>`
  ${({ theme, size, text }) => {
    const { logo } = theme.component

    const logoSize = size
      ? !Number.isNaN(Number(size))
        ? `${size}px`
        : size
      : `1em`

    return css`
      ${tw`inline-flex items-baseline justify-center flex-wrap`}

      font-size: ${logoSize};
      gap: ${logo.gap};

      ${StyledContainer2} > svg {
        font-size: ${text ? '0.8em' : '1em'};
      }
    `
  }}
`

export const StyledContainer2 = styled.span`
  ${({ theme }) => {
    const { logo } = theme.component

    return css`
      ${tw`inline-flex items-center justify-center bg-transparent`}
      gap: ${logo.gap};
    `
  }}
`

export const StyledText = styled(TextGradient)`
  && {
    ${getTypoCss('logo')};
    ${tw`my-0`}
    font-size: 1em;
    line-height: normal;
  }
`

export type StyledByAlephProps = {
  $color: string
}

export const StyledByAlephLink = styled.a.attrs(
  addClasses('tp-body2'),
)<StyledByAlephProps>`
  && {
    ${tw`inline-flex items-center self-end whitespace-nowrap`}
    color: ${({ $color }) => $color};
    font-size: 0.25em;
    line-height: 0.25em;
    margin-bottom: 0.55em;
    gap: 0.25em;
  }
`
