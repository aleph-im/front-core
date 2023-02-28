import styled, { css } from 'styled-components'
import TextGradient from '../TextGradient'
import { StyledTabItemProps, TabLabelProps, TabType } from './types'

export const StyledTabsHeader = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledTabsItem = styled.div<StyledTabItemProps>`
  ${({ theme, isSelected, isDisabled }) => {
    return css`
      padding: 15px;
      position: relative;
      font-weight: bold;
      ${ !isSelected && 'cursor: pointer;' }
      color: ${isDisabled ? theme.color.base0 + '66' : theme.color.base0};
      display: flex;
      user-select: none;

      &::after {
        content: '';
        height: 2px;
        width: 100%;
        background: ${isSelected ? theme.gradient.main0.fn : theme.color.base0 + '66'};
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    `
  }}
`

export const StyledSelectedTab = styled(TextGradient)`
  font-weight: bold;
  line-height: unset;
`

export const StyledTabLabel = styled.div<TabLabelProps>`
  ${({ theme, labelPosition = 'top' }) => {
    const multiplier = labelPosition === 'top' ? -1 : 1
    const offset = theme.typo.info.size * multiplier

    return css`
      transform: translate(5px, ${offset}rem);
      color: ${theme.color.base0};
      font-size: ${theme.typo.info.size}rem;
      font-weight: ${theme.typo.info.weight};
      font-family: ${theme.typo.info.family};
      font-style: ${theme.typo.info.style};
    `
  }}
`
