import styled from 'styled-components'
import Button from '../Button'
import Icon from '../Icon'
import tw from 'twin.macro'

export const StyledContainer = styled.div`
  ${tw`p-4`}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  right: 0;
  max-height: 100%;
  overflow: auto;
`

export const StyledClearButton = styled(Button).attrs(() => {
  return {
    color: 'main0',
    variant: 'tertiary',
    kind: 'neon',
    size: 'regular',
  }
})`
  ${tw`flex-1`}
`

export const StyledClearIcon = styled(Icon).attrs((props) => {
  return {
    ...props,
    name: 'multiply',
    size: 'lg',
    className: 'ml-2.5',
  }
})`
  ${tw`ml-2`}
`
