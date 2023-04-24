import styled, { css } from 'styled-components'
import { getGlowMinEffectCss } from '../../styles'
import { addClasses } from '../../utils'
import Icon, { IconProps } from '../Icon'
import { BulletItemKind, BulletListSize } from './types'

export const StyledBulletList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StyledBulletItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

export interface StyledBulletItemIconContainerProps {
  kind: BulletItemKind
  size?: BulletListSize
}

export const StyledBulletItemIconContainer = styled.div.attrs<StyledBulletItemIconContainerProps>(props => {
  const { kind } = props
  const cls = kind === 'check'
    ? 'bg-success'
    : kind === 'error'
      ? 'bg-error'
      : ''

  return {
    ...addClasses(cls)(props)
  }
}) <StyledBulletItemIconContainerProps>`
  ${(props) => {
    const { theme, kind } = props
    const fontSize = props.size === 'big' ? '2.25rem' : '1.5rem'

    const commonCss = css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: ${fontSize};
      height: ${fontSize};
      font-size: ${fontSize};
      flex: 0 0 auto;
      margin-right: 1rem;
      border-radius: 50%;
    `

    switch (kind) {
      case 'check':
        return commonCss
      case 'check2':
        return css`
          ${commonCss}
          background-image: ${theme.gradient.main0.fn};
          ${getGlowMinEffectCss('main0')};
        `
      case 'error':
        return css`
          ${commonCss}
          color: ${theme.color.background};
        `
    }
  }}
`

export interface StyledBulletItemIconProps {
  kind: BulletItemKind
  $size?: BulletListSize
}

export const StyledBulletItemIcon = styled(Icon).attrs<StyledBulletItemIconProps, IconProps>((props: any) => {
  return {
    ...props,
    name: props.kind === 'error' ? 'minus' : 'check',
    color: props.theme.color.background,
    prefix: 'fass',
  }
}) <StyledBulletItemIconProps>`
  font-size: ${props => props.$size === 'big' ? '1.25rem' : '0.875rem'};
`

export const StyledBulletItemContent = styled.div`

`
