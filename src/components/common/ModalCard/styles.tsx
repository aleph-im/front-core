import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import Icon from '../Icon'
import tw from 'twin.macro'

export const StyledContainer = styled.div`
  ${({ theme }) => {
    const { background, color } = theme.component.modal

    return css`
      ${tw`p-6 break-words max-w-full`}
      word-break: break-word;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      min-width: 31.25rem;
      border-radius: 1.5rem;
      background: ${background};
      backdrop-filter: blur(50px);

      && {
        color: ${color};
      }
    `
  }}
`

export const StyledHeaderContainer = styled.div.attrs(addClasses('tp-h7'))`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

export const StyledHeaderActions = styled.div`
  ${tw`absolute flex items-center justify-center top-0 right-0`}
  width: 2.25rem;
  height: 2.25rem;
`

export const StyledHeaderCloseIcon = styled(Icon).attrs((props) => {
  return {
    ...props,
    name: 'circle-xmark',
    size: 'xl',
  }
})`
  && {
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1;
  }
`

export const StyledContentContainer = styled.div.attrs(
  addClasses('tp-body1 fs-18'),
)(() => [tw`mb-4`])

export const StyledFooterContainer = styled.div.attrs(
  addClasses('tp-code fs-16'),
)``
