import tw from 'twin.macro'
import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../../styles'
import Button from '../../common/Button'
import { BreakpointId } from '../../../themes'
import { FloatPosition } from '../../../hooks'

export const StyledButton = styled(Button).attrs(({ theme }) => {
  const { tablet } = theme.component.navbar

  return {
    color: tablet?.buttonColor,
    variant: 'secondary',
    size: 'regular',
  }
})(() => [tw`hidden`])

// A <ul> element, wrapping the links (text and buttons)
export const StyledList = styled.ul`
  display: flex;
  width: 100%;
`

export type StyledRestContainerProps = {
  $isOpen: boolean
  $position: FloatPosition
}

export const StyledRestContainer = styled.ul<StyledRestContainerProps>`
  ${({ theme, $isOpen, $position: { x, y } }) => {
    const { mobile } = theme.component.navbar

    return css`
      ${tw`flex flex-col fixed left-0 top-0 p-6 m-0`}
      background-color: ${mobile.header.background};
      backdrop-filter: blur(50px);
      min-width: 14rem;
      border-radius: 1.25rem;
      gap: 1.75rem;
      transform: ${`translate3d(${x}px, ${y}px, 0)`};
      opacity: 0;
      visibility: hidden;

      transition-property: opacity, visibility;
      transition-duration: ${theme.transition.duration.fast}ms;
      transition-timing-function: ${theme.transition.timing};

      ${$isOpen &&
      css`
        opacity: 1;
        visibility: inherit;
      `}
    `
  }}
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
    $breakpoint,
    $isCollapsed,
    $onlyDesktop,
    $onlyMobile,
    $withSlash,
    $mobileDirection = 'column',
    $desktopDirection = 'row',
    $mobileGap = $mobileDirection === 'row',
    $desktopGap = true,
    theme,
  }) => {
    const { color } = theme.component.navbar

    return css`
      ${tw`relative flex flex-col max-w-full`}
      gap: 1.75rem;
      ${$onlyDesktop ? 'display: none;' : ''}

      & ${StyledList} {
        flex-direction: ${$mobileDirection};
        gap: ${$mobileGap ? 1.75 : 0}rem;
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
            gap: ${$desktopGap ? 1.75 : 0}rem;
            color: ${color};

            ${$withSlash &&
            css`
              gap: 0;
              & > :not(:last-child)::after {
                content: '/';
                display: inline-block;
                padding: 0 1.75rem;
              }
            `};
          }
        `,
      )}
    `
  }}
`
