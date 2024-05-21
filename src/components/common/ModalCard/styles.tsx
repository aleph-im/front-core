import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import Icon from '../Icon'
import tw from 'twin.macro'

export type StyledContainerProps = {
  $width?: string
}

export const StyledContainer = styled.div<StyledContainerProps>`
  ${({ theme, $width = 'auto' }) => {
    const { background, color } = theme.component.modal

    return css`
      ${tw`p-6 break-words max-w-full max-h-full overflow-hidden`}
      word-break: break-word;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      width: ${$width};
      gap: 1rem;
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
  ${tw`relative flex items-center justify-start w-full pr-14`}
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
)(() => [tw`w-full overflow-auto`])

export const StyledFooterContainer = styled.div.attrs(
  addClasses('tp-code fs-16'),
)(() => [tw`w-full`])
