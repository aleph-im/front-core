import tw from 'twin.macro'
import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../../styles'
import Button from '../../common/Button'
import { BreakpointId } from '../../../themes'

export const StyledButton = styled(Button).attrs(() => {
  return {
    color: '#ffffff66',
    variant: 'secondary',
    size: 'regular',
  }
})(() => [tw`hidden`])

// A <ul> element, wrapping the links (text and buttons)
export const StyledList = styled.ul`
  display: flex;
  width: 100%;
`

export const StyledRestContainer = styled.ul`
  ${tw`flex flex-col absolute left-0 p-6 m-0 w-full`}
  top: 130%;
  background-color: #070713a6 !important;
  backdrop-filter: blur(50px);
  border-radius: 1.25rem;
  gap: 1.75rem;
`

export type StyledContainerProps = {
  $breakpoint: BreakpointId
  $isCollapsed: boolean
  $onlyDesktop?: boolean
  $onlyMobile?: boolean
  $withSlash?: boolean
  $mobileDirection?: 'row' | 'column'
  $desktopDirection?: 'row' | 'column'
  $mobileGap?: boolean
  $desktopGap?: boolean
}

export const StyledContainer = styled.div<StyledContainerProps>`
  ${({
    theme,
    $breakpoint,
    $isCollapsed,
    $onlyDesktop,
    $onlyMobile,
    $withSlash,
    $mobileDirection = 'column',
    $desktopDirection = 'row',
    $mobileGap = $mobileDirection === 'row',
    $desktopGap = true,
  }) => {
    return css`
      ${tw`relative flex flex-col max-w-full`}
      gap: ${theme.font.size['28']}rem;
      ${$onlyDesktop ? 'display: none;' : ''}

      & ${StyledList} {
        flex-direction: ${$mobileDirection};
        gap: ${$mobileGap ? theme.font.size['28'] : 0}rem;
      }

      ${getResponsiveCss(
        $breakpoint,
        css`
          ${tw`flex flex-row items-center`}
          flex: 0 1 0px;
          padding-left: ${$isCollapsed ? '1.5rem' : ''};
          ${$onlyMobile ? 'display: none;' : ''}

          & ${StyledButton} {
            ${tw`inline-flex`}
          }

          & ${StyledList} {
            width: auto;
            flex: 0 1 auto;
            align-items: center;
            flex-direction: ${$desktopDirection};
            gap: ${$desktopGap ? theme.font.size['28'] : 0}rem;

            ${$withSlash &&
            css`
              gap: 0;
              & > :not(:last-child)::after {
                content: '/';
                display: inline-block;
                padding: 0 1.75rem;
              }
            `}
          }
        `,
      )}
    `
  }}
`
