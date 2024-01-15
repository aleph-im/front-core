import tw from 'twin.macro'
import styled, { css } from 'styled-components'
import { StyledTabItemProps, StyledTabType, TabLabelProps } from './types'
import { addClasses } from '../../../utils'

export const StyledContainer = styled.div<StyledTabType>`
  ${({ align }) => css`
    display: flex;
    justify-content: ${align};
  `}
`

export const StyledTabs = styled.div<StyledTabType>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  overflow: auto;
`

export const StyledTab = styled.div.attrs(
  addClasses('tp-nav'),
)<StyledTabItemProps>`
  ${({ theme, selected, disabled }) => {
    const { color } = theme.component.tab

    return css`
      ${tw`flex relative p-3 transition-colors duration-500 flex-initial shrink-0`}
      cursor: ${disabled ? 'not-allowed' : selected ? 'default' : 'pointer'};
      user-select: none;
      color: ${disabled
        ? color.disabled
        : selected
        ? color.active
        : color.default};

      &::after {
        ${tw`h-0.5 w-full block absolute left-0 bottom-0`}
        content: '';
        background: ${color.disabled};
      }
    `
  }}
`

export type StyledLabelProps = Pick<TabLabelProps, 'position'> & {
  disabled?: boolean
}

export const StyledLabel = styled.div.attrs(
  addClasses('tp-info'),
)<StyledLabelProps>`
  ${({ theme, position = 'top', disabled }) => {
    const multiplier = position === 'top' ? -1 : 1
    const offset = theme.typo.info.size * multiplier
    const { color } = theme.component.tab

    return css`
      transform: translate(0.375rem, ${offset}rem);
      color: ${disabled ? color.disabled : color.label || 'inherit'};
    `
  }}
`
export const StyledUnderscoreBar = styled.div`
  ${({ theme }) => {
    const { color } = theme.component.tab

    return css`
      ${tw`absolute bottom-0 h-0.5 w-auto transition-all duration-500 m-0 p-0`}
      background-color: ${color.active};
      will-change: left, width;
    `
  }}
`
