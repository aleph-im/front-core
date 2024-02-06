import styled, { css, useTheme } from 'styled-components'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import { NoisyContainerProps } from './types'

export const StyledContainer = styled.div.attrs<NoisyContainerProps>(
  (props) => {
    const theme = useTheme()
    const { $type = theme.component.noisyContainer.default } = props

    return addClasses(`fx-${$type}`)(props)
  },
)<NoisyContainerProps>`
  ${({ theme, $animation = 50000 }) => {
    const { borderRadius } = theme.component.noisyContainer

    return css`
      ${tw`p-6`}
      border-radius: ${borderRadius}rem;

      &&::after {
        ${$animation
          ? css`
              animation-duration: ${$animation}ms;
            `
          : css`
              animation: none;
            `}
      }
    `
  }}
`

export default StyledContainer
