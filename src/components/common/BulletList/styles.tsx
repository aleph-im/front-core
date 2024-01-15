import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import Icon, { IconProps } from '../Icon'
import { BulletItemKind, BulletListSize } from './types'

export const StyledList = styled.ul<{ gap?: string }>`
  ${({ gap = '2rem' }) => css`
    display: inline-flex;
    flex-direction: column;
    gap: ${gap};
  `}
`

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
`

export interface StyledBulletItemIconContainerProps {
  $kind: BulletItemKind
  $size?: BulletListSize
}

export const StyledIconContainer = styled.div<StyledBulletItemIconContainerProps>`
  ${({ theme, $kind, $size }) => {
    const { bulletList } = theme.component
    const {
      background = theme.color[$kind],
      shadow,
      css: buttonCSS,
    } = bulletList.bullet[$kind] || {}

    const fontSize = $size === 'big' ? 2.25 : 1.5

    return css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${fontSize}rem;
      height: ${fontSize}rem;
      font-size: ${fontSize}rem;
      flex: 0 0 auto;
      margin-right: 1rem;
      border-radius: 50%;
      color: ${theme.color.background};
      background: ${background};
      box-shadow: ${shadow};
      ${buttonCSS && buttonCSS(fontSize)}

      && ${StyledIcon} {
        font-size: ${$size === 'big' ? '1.25rem' : '0.875rem'};
      }
    `
  }}
`

export interface StyledBulletItemIconProps {
  $kind: BulletItemKind
}

export const StyledIcon = styled(Icon).attrs<
  StyledBulletItemIconProps,
  IconProps
>((props) => {
  return {
    ...props,
    name: props.$kind === 'error' ? 'minus' : 'check',
    color: props.theme.color.background,
    prefix: 'fass',
  }
})<StyledBulletItemIconProps>``

export type StyledTitleProps = { $size: string }

export const StyledTitle = styled.span.attrs<StyledTitleProps>((props) => {
  const cls = props.$size === 'big' ? 'tp-h7' : 'tp-body2 fs-18'
  return addClasses(`${cls}`)(props)
})``
