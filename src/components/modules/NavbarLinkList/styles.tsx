import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { getResponsiveCss } from '../../../styles'
import { NavbarLinkListProps } from './types'
import Button from '../../common/Button'

export const StyledContainer = styled.div<
  NavbarLinkListProps & { isCollapsed: boolean }
>`
  ${({ theme, onlyDesktop, onlyMobile, isCollapsed }) => {
    return css`
      position: relative;
      display: flex;
      max-width: 100%;
      gap: ${theme.font.size['28']}rem;
      ${onlyDesktop ? 'display: none;' : ''}

      ${getResponsiveCss(
        'md',
        css`
          display: flex;
          flex: 0 1 0px;
          padding-left: ${isCollapsed ? '1.5rem' : ''};
          align-items: center;
          ${onlyMobile ? 'display: none;' : ''}
        `,
      )}
    `
  }}
`

export const StyledButton = styled(Button).attrs(() => {
  return {
    color: '#ffffff66',
    variant: 'secondary',
    kind: 'neon',
    size: 'regular',
  }
})(() => [tw`hidden md:inline-flex`])

// A <ul> element, wrapping the links (text and buttons)
export const StyledList = styled.ul<NavbarLinkListProps>`
  ${({
    theme,
    withSlash,
    mobileDirection = 'column',
    desktopDirection = 'row',
    mobileGap = mobileDirection === 'row',
    desktopGap = true,
  }) => {
    return css`
      display: flex;
      width: 100%;
      flex-direction: ${mobileDirection};
      gap: ${mobileGap ? theme.font.size['28'] : 0}rem;

      ${getResponsiveCss(
        'md',
        css`
          width: auto;
          flex: 0 1 auto;
          align-items: center;
          flex-direction: ${desktopDirection};
          gap: ${desktopGap ? theme.font.size['28'] : 0}rem;

          ${withSlash &&
          css`
            gap: 0;
            & > :not(:last-child)::after {
              content: '/';
              display: inline-block;
              padding: 0 1.75rem;
            }
          `}
        `,
      )}
    `
  }}
`

export const StyledRestContainer = styled.ul`
  ${tw`p-6 m-0`}
  position: absolute;
  top: 130%;
  left: 0;
  background-color: #070713a6 !important;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 1.25rem;
  gap: 1.75rem;
`
