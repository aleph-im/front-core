import styled, { css } from 'styled-components'
import { StyledTabItemProps, StyledTabType, TabLabelProps } from './types'
import { addClasses } from '../../utils'
import tw from 'twin.macro'

export const StyledTabsHeader = styled.div<StyledTabType>`
  ${({ align }) => css`
    position: relative;
    display: flex;
    justify-content: ${align};
  `}
`

export const StyledTabsItem = styled.div.attrs(
  addClasses('tp-nav'),
)<StyledTabItemProps>`
  ${({ theme, selected, disabled }) => {
    return css`
      ${tw`flex relative p-3 transition-colors duration-500`}
      cursor: ${disabled ? 'not-allowed' : selected ? 'default' : 'pointer'};
      user-select: none;
      color: ${disabled
        ? `${theme.color.base0}33`
        : selected
        ? theme.color.main0
        : theme.color.base0};

      &::after {
        ${tw`h-0.5 w-full block absolute left-0 bottom-0`}
        content: '';
        background: ${theme.color.base0 + '33'};
      }
    `
  }}
`

export const StyledTabLabel = styled.div.attrs(
  addClasses('tp-info'),
)<TabLabelProps>`
  ${({ theme, disabled, labelPosition = 'top' }) => {
    const multiplier = labelPosition === 'top' ? -1 : 1
    const offset = theme.typo.info.size * multiplier

    return css`
      transform: translate(0.375rem, ${offset}rem);
      color: ${disabled ? theme.color.base0 : 'inherit'};
    `
  }}
`
export const StyledUnderscoreBar = styled.div`
  ${({ theme }) => css`
    ${tw`absolute left-0 bottom-0 h-0.5 w-auto transition-all duration-500 m-0 p-0`}
    background-color: ${theme.color.main0};
    will-change: left, width;
  `}
`
