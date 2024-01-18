import styled, { useTheme } from 'styled-components'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import { NoisyContainerProps } from './types'

export const StyledContainer = styled.div.attrs<NoisyContainerProps>(
  (props) => {
    const theme = useTheme()

    const defaultType = theme.name === 'aleph' ? 'noise-light' : 'grain-0'
    const { $type = defaultType } = props

    return addClasses(`fx-${$type}`)(props)
  },
)<NoisyContainerProps>`
  ${tw`p-6 rounded-3xl`}

  &&::after {
    z-index: -1;
  }
`

export default StyledContainer
