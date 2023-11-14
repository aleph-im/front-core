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
    return css`
      ${tw`flex relative p-3 transition-colors duration-500 flex-initial shrink-0`}
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

export const StyledLabel = styled.div.attrs(addClasses('tp-info'))<
  Pick<TabLabelProps, 'position'> & {
    disabled?: boolean
  }
>`
  ${({ theme, position = 'top', disabled }) => {
    const multiplier = position === 'top' ? -1 : 1
    const offset = theme.typo.info.size * multiplier

    return css`
      transform: translate(0.375rem, ${offset}rem);
      color: ${disabled ? theme.color.base0 : 'inherit'};
    `
  }}
`
export const StyledUnderscoreBar = styled.div`
  ${({ theme }) => css`
    ${tw`absolute bottom-0 h-0.5 w-auto transition-all duration-500 m-0 p-0`}
    background-color: ${theme.color.main0};
    will-change: left, width;
  `}
`
