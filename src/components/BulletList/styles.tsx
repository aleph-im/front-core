import styled, { css } from 'styled-components'
import { getGlowMinEffectCss } from '../../styles'
import { addClasses } from '../../utils'
import Icon, { IconProps } from '../Icon'
import { BulletItemKind, BulletListSize } from './types'

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StyledItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

export interface StyledBulletItemIconContainerProps {
  kind: BulletItemKind
  size?: BulletListSize
}

export const StyledIconContainer = styled.div.attrs<StyledBulletItemIconContainerProps>(props => {
  const { kind } = props
  const cls = kind !== 'check' && kind !== 'warning' ? `bg-${kind}` : ''

  return {
    ...addClasses(cls)(props)
  }
}) <StyledBulletItemIconContainerProps>`
  ${(props) => {
    const { theme, kind } = props
    const fontSize = props.size === 'big' ? 2.25 : 1.5

    const commonCss = css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: ${fontSize}rem;
      height: ${fontSize}rem;
      font-size: ${fontSize}rem;
      flex: 0 0 auto;
      margin-right: 1rem;
      border-radius: 50%;
      color: ${theme.color.background};
    `

    switch (kind) {
      case 'check':
        return css`
          ${commonCss}
          background-image: ${theme.gradient.main0.fn};
          ${getGlowMinEffectCss('main0', { height: fontSize * 16 })};
        `
      case 'warning':
        return css`
          ${commonCss}
          background-image: ${theme.gradient.main2.fn};
          ${getGlowMinEffectCss('main2', { height: fontSize * 16 })};
        `
      default:
        return commonCss
    }
  }}
`

export interface StyledBulletItemIconProps {
  kind: BulletItemKind
  $size?: BulletListSize
}

export const StyledIcon = styled(Icon).attrs<StyledBulletItemIconProps, IconProps>((props: any) => {
  return {
    ...props,
    name: props.kind === 'error' ? 'minus' : 'check',
    color: props.theme.color.background,
    prefix: 'fass',
  }
}) <StyledBulletItemIconProps>`
  font-size: ${props => props.$size === 'big' ? '1.25rem' : '0.875rem'};
`

export const StyledTitle = styled.span.attrs<{ size: string }>(props => {
  const cls = props.size === 'big' ? 'tp-h7' : 'tp-body2 fs-md'
  return {
    ...addClasses(`m-0 ${cls}`)(props),
  }
})``
