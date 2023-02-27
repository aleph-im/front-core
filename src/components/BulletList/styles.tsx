import styled, { css } from 'styled-components'
import { getGlowMinEffectCss } from '../../styles'
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

export interface StyledBulletItemIconWrapProps {
  kind: BulletItemKind
  size?: BulletListSize
}

export const StyledBulletItemIconWrap = styled.div<StyledBulletItemIconWrapProps>`
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
        return css`
          ${commonCss}
          background-color: #7CFF79;
          box-shadow: inset 3px 3px 9px rgba(255, 255, 255, 0.65), inset 0px 63px 60px rgba(145, 255, 189, 0.63), inset 8.375px 13.4px 46.75px rgba(252, 255, 96, 0.75);
        `
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
          background-color: #D92446;
          box-shadow: inset 0px 1.675px 6px rgba(255, 255, 255, 0.17), inset -4px -1px 9px rgba(139, 99, 255, 0.19);
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
