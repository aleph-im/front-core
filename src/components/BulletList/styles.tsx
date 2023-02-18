import styled, { css } from 'styled-components'
import Icon, { IconProps } from '../Icon'
import { BulletItemKind, BulletListSize } from './types'

export const StyledBulletList = styled.ul`
  list-style: none;
`

export const StyledBulletItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
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
          box-shadow: 24px 40px 92px 44px rgba(0, 102, 255, 0.3), 0px -18px 70px 26px rgba(0, 84, 255, 0.11), inset 0px 4px 18px rgba(146, 210, 210, 0.3), inset 0px 1px 40px rgba(222, 239, 255, 0.2), inset 0px 7px 11px -4px rgba(255, 255, 255, 0.7), inset 0px -82px 68px -64px rgba(68, 98, 144, 0.3);
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
