import { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import Icon from '../Icon'
import { TooltipPosition } from './types'
import tw from 'twin.macro'
import { TransitionedState } from '../../../hooks/useTransitionedEnterExit'
import { getResponsiveCss } from '../../../styles'

export type StyledContainerProps = {
  $position: TooltipPosition
  $state: TransitionedState
} & HTMLAttributes<HTMLDivElement>

export const StyledContainer = styled.div.attrs(
  addClasses('fx-glass-base2'),
)<StyledContainerProps>`
  ${({ theme, $state, $position: { x = 0, y = 0 } }) => {
    const [g0, g1] = theme.gradient.main0.colors

    return css`
      ${tw`fixed inline-flex flex-col items-stretch justify-start gap-4 p-6 inset-6 z-10`}

      will-change: transform;
      border-radius: 1.5rem;
      backdrop-filter: blur(50px);
      color: ${theme.color.text};
      will-change: opacity translate3d;
      transition: opacity ease-in-out 0.25s 0s;
      opacity: ${$state === 'enter' ? 1 : 0};

      ${getResponsiveCss(
        'md',
        css`
          ${tw`inset-auto top-0 left-0`}

          transform: ${`translate3d(${x}px, ${y}px, 0)`};
          max-width: 24.5625rem;
        `,
      )}

      /* BORDER */
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

export const StyledContentContainer = styled.div.attrs(
  addClasses('tp-body1 fs-12'),
)``
