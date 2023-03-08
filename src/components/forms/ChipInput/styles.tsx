import styled, { css } from 'styled-components'
import { getTypoCss } from '../../../styles';
import { StyledTextInputContainer } from '../TextInput/styles';

export const StyledContainer = styled(StyledTextInputContainer) <{ isBig: boolean }>`
  ${({ isBig }) => {
    return css`
      flex-wrap: wrap;
      border-radius: ${isBig ? '22px' : '30px'};
      padding: ${isBig ? '0.5rem' : '0'};
    `
  }}
`

export const StyledChipContainer = styled.div<{ isBig: boolean }>`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  align-self: stretch;
  margin: ${({ isBig }) => isBig ? '0' : '0 0.34375rem'};
  max-width: 100%;
  overflow: hidden;
`

export const StyledChip = styled.span`
  ${({ theme }) => {
    return css`
      display: inline-flex;
      align-items: center;
      background-color: ${theme.color.main0};
      color: ${theme.color.text};
      border-radius: 30px;
      min-height: 2.0625rem; // 33px
      padding: 0.125rem 1.125rem;
      margin: 0.34375rem 0;
      margin-right: 0.5rem;
      max-width: 100%;
    `
  }}
`

export const StyledChipTag = styled.span`
  margin-right: 0.25rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const StyledChipRemoveButton = styled.button`
  ${({ theme }) => {
    return css`
      border: none;
      cursor: pointer;
      color: ${theme.color.text};
      background-color: transparent;
      line-height: 0;
      padding: 0;
      margin: 0;
      margin-left: 0.625rem;
      transition: all 0.1s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    `
  }}
`

export const StyledInput = styled.input<{ isBig: boolean }>`
  ${({ theme, isBig }) => {
    return css`
      flex: 1 1 auto;
      padding: ${isBig ? '0.5rem 0.5rem 0' : '0.5rem 1.5rem'};
      min-height: 2.75em;
      border: none;
      outline: none;
      color: ${theme.color.text};
      background-color: transparent;
      ${getTypoCss('form')}

      &::placeholder {
        text-transform: capitalize;
        mix-blend-mode: normal;
        opacity: 0.4;
      }
    `
  }}
`
