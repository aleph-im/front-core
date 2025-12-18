import { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import Icon from '../Icon'
import { TooltipPosition, TooltipVariant } from './types'
import tw from 'twin.macro'
import { getResponsiveCss } from '../../../styles'
import { Stage } from 'transition-hook'

export type StyledContainerProps = {
  $position: TooltipPosition
  $stage: Stage
  $variant: TooltipVariant
} & HTMLAttributes<HTMLDivElement>

export const StyledContainer = styled.div.attrs(
  addClasses('fx-glass-base2'),
)<StyledContainerProps>`
  ${({ theme, $stage, $variant, $position: { x = 0, y = 0 } }) => {
    const [g0, g1] = theme.gradient.main0.colors

    return css`
      ${tw`fixed inline-flex flex-col items-stretch justify-start gap-4 p-6 inset-6 z-50`}

      ${$variant === 1 &&
      css`
        border-radius: 1.5rem;
        color: ${theme.color.text};
      `}

      ${$variant === 2 &&
      css`
        color: ${theme.color.white};
        background: ${theme.color.black};
        padding: 0.1428rem 0.4286rem;
      `}

      backdrop-filter: blur(50px);
      opacity: ${$stage === 'enter' ? 1 : 0};
      will-change: opacity, transform;
      transition-property: opacity;
      transition-duration: ${theme.transition.duration.fast}ms;
      transition-timing-function: ${theme.transition.timing};

      ${getResponsiveCss(
        'md',
        css`
          ${tw`inset-auto top-0 left-0`}

          transform: ${`translate3d(${x}px, ${y}px, 0)`};
          max-width: 24.5625rem;
        `,
      )}

      /* BORDER */
      ${$variant === 1 &&
      css`
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          height: 100%;
          width: 100%;
          background-image: linear-gradient(90deg, ${g0} 0%, ${g1} 100%);
          padding: 0.0625rem;
          border-radius: 1.5rem;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
        }
      `}
    `
  }}
`

export const StyledHeaderCloseIcon = styled(Icon).attrs((props) => {
  return {
    ...props,
    name: 'multiply',
    size: 'xl',
  }
})`
  top: 0;
  right: 0;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.375rem;
  cursor: pointer;
  margin-left: auto;
  align-self: flex-start;
  flex: 0 0 auto;
`

export type StyledContentContainerProps = {
  $variant: TooltipVariant
} & HTMLAttributes<HTMLDivElement>

export const StyledContentContainer = styled.div.attrs<StyledContentContainerProps>(
  (props) => {
    switch (props.$variant) {
      case 1:
        return addClasses('tp-body1 fs-12')(props)
      case 2:
        return addClasses('tp-body3 fs-12')(props)
    }
  },
)<StyledContentContainerProps>``

export const StyledChildrenContainer = styled.span`
  display: inline-block;
`
