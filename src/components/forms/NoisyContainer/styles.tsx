import styled from 'styled-components'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import { NoisyContainerProps } from './types'

export const StyledContainer = styled.div.attrs<NoisyContainerProps>(
  (props) => {
    const { $type = 'light' } = props
    return addClasses(`fx-noise-${$type}`)(props)
  },
)<NoisyContainerProps>`
  ${tw`p-6 rounded-3xl`}
`

export default StyledContainer
