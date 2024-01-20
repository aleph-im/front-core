import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import Button from '../../common/Button'
import Icon from '../../common/Icon'

export type StyledContainerProps = {
  $maxWidth?: string
}

export const StyledContainer = styled.div<StyledContainerProps>`
  ${({ theme, $maxWidth = `${theme.breakpoint['2xl'] + 12.5}rem` }) => css`
    ${tw`px-6 md:px-16`}
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    max-width: ${$maxWidth};
  `}
`

export const StyledFooter = styled.footer`
  ${tw`py-12 md:py-12`}
  background-color: #00000033;
  box-sizing: border-box;
  width: 100%;
`

export const StyledButton = styled(Button).attrs((props) => {
  return {
    ...props,
    variant: 'tertiary',
    color: 'main0',
    size: 'big',
  }
})(() => [tw`!block !mb-6 last:!mb-0`])

export const StyledLink = styled.a.attrs((props) => {
  return {
    ...addClasses('tp-nav')(props),
    href: props.href || '#',
  }
})`
  ${({ theme }) => css`
    display: block;
    cursor: pointer;
    font-weight: 700;
    white-space: nowrap;

    color: ${theme.color.text};
    text-decoration: none;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`

export const StyledIcon = styled(Icon).attrs((props) => {
  return {
    ...props,
    size: 'lg',
  }
})(() => [tw`mr-2.5`])

export const StyledIcon2 = styled(Icon).attrs((props) => {
  return {
    ...props,
    size: 'lg',
  }
})(() => [tw`ml-2.5`])
