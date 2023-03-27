import styled from 'styled-components'
import { addClasses } from '../../utils'
import Button from '../Button'
import Icon from '../Icon'

export const StyledContainer = styled.div.attrs(addClasses('p-sm'))`
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  right: 0;
  max-height: 100%;
  overflow: scroll;
`

export const StyledClearButton = styled(Button).attrs(props => {
  return {
    ...addClasses('mt-sm')(props),
    color: 'main0',
    variant: 'tertiary',
    kind: 'neon',
    size: 'regular',
  }
})`
  flex: 1 0 auto;
`

export const StyledClearIcon = styled(Icon).attrs(props => {
  return {
    ...props,
    name: 'multiply',
    size: 'lg',
    className: 'ml-xs',
  }
})``
