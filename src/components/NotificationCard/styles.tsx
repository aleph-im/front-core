import styled, { css } from 'styled-components'
import { addClasses } from '../../utils'
import Icon, { IconProps } from '../Icon'
import { NotificationCardVariant } from './types'

type NotificationVariantProps = { variant: NotificationCardVariant }

export const StyledContainer = styled.div.attrs<NotificationVariantProps>(props => {
  const color = props.variant === 'success'
    ? 'gr-main1'
    : props.variant === 'warning'
      ? 'gr-main2'
      : 'gr-extra1'

  return {
    ...addClasses('p-lg ' + color)(props),
  }
})`
  ${({ theme }) => {
    return css`
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      width: 500px;
      border-radius: 24px;

      && {
        color: ${theme.color.base1};
      }
    `
  }}
`

export const StyledHeaderContainer = styled.div.attrs(addClasses('mb-sm pr-xl'))`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

export const StyledHeaderIcon = styled(Icon).attrs<NotificationVariantProps, IconProps>(props => {
  const name = props.variant === 'success'
    ? 'check-circle'
    : props.variant === 'warning'
      ? 'info-circle'
      : 'exclamation-circle'

  return {
    ...addClasses('mr-sm')(props),
    name,
    size: 'xxl'
  }
}) <NotificationVariantProps>``


export const StyledHeaderCloseIcon = styled(Icon).attrs(() => {
  return {
    name: 'multiply',
    size: 'xl'
  }
})`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`

export const StyledContentContainer = styled.div.attrs(addClasses('tp-body1 fs-md mb-sm')) <NotificationVariantProps>``

export const StyledFooterContainer = styled.div.attrs(addClasses('tp-code fs-sm')) <NotificationVariantProps>``
