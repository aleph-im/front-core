import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import Icon, { IconProps } from '../Icon'
import { NotificationCardVariant } from './types'
import tw from 'twin.macro'

type NotificationVariantProps = { variant: NotificationCardVariant }

export const StyledContainer = styled.div.attrs<NotificationVariantProps>(
  (props) => addClasses(`gr-${props.variant}`)(props),
)`
  ${({ theme }) => css`
    ${tw`p-6`}
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 31.25rem;
    border-radius: 1.5rem;

    && {
      color: ${theme.color.base1};
    }
  `}
`

export const StyledHeaderContainer = styled.div.attrs(addClasses('tp-h7'))`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

export const StyledHeaderIcon = styled(Icon).attrs<
  NotificationVariantProps,
  IconProps
>((props) => {
  const name =
    props.variant === 'success'
      ? 'check-circle'
      : props.variant === 'warning'
      ? 'info-circle'
      : 'exclamation-circle'

  return {
    name,
    size: 'xxl',
  }
})<NotificationVariantProps>(() => [tw`mr-4`])

export const StyledHeaderCloseIcon = styled(Icon).attrs((props) => {
  return {
    ...props,
    name: 'multiply',
    size: 'xl',
  }
})`
  && {
    top: 0;
    right: 0;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.5rem;
    padding: 0.375rem;
    cursor: pointer;
    margin-left: auto;
    align-self: flex-start;
    flex: 0 0 auto;
  }
`

export const StyledContentContainer = styled.div.attrs(
  addClasses('tp-body1 fs-18'),
)<NotificationVariantProps>(() => [tw`mb-4`])

export const StyledFooterContainer = styled.div.attrs(
  addClasses('tp-code fs-16'),
)<NotificationVariantProps>``
