import styled from 'styled-components'
import Button from '../Button'
import Icon from '../Icon'
import tw from 'twin.macro'

export const StyledContainer = styled.div`
  ${tw`fixed bottom-0 right-0 flex flex-col justify-start items-end p-4 overflow-auto max-h-full max-w-full`}
`

export const StyledNotificationContainer = styled.div`
  ${tw`flex-auto flex flex-col overflow-auto max-w-full`}
`

export const StyledClearButton = styled(Button).attrs(() => {
  return {
    color: 'main0',
    variant: 'tertiary',
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
