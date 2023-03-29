import { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { addClasses } from '../../utils'
import Icon from '../Icon'
import { TooltipPosition } from './types'

export const StyledContainer = styled.div.attrs<{ position: TooltipPosition, isOpen: boolean }, HTMLAttributes<HTMLDivElement>>(props => {
  const { x, y } = props.position || { x: 0, y: 0 }

  return {
    ...addClasses('p-lg fx-glass-base2')(props),
    style: {
      display: props.isOpen ? 'block' : 'none',
      top: 0,
      left: 0,
      transform: `translate3d(${x}px, ${y}px, 0)`
    }
  }
})`
  ${({ theme }) => {
    const [g0, g1] = theme.gradient.main0.colors

    return css`
      position: fixed;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      will-change: transform;
      gap: 1rem;
      max-width: 500px;
      border-radius: 24px;
      backdrop-filter: blur(50px);
      color: ${theme.color.text};

       /* BORDER */
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        background-image: linear-gradient(90deg, ${g0} 0%, ${g1} 100%);
        padding: 1px;
        border-radius: 24px;
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        -webkit-mask-composite: xor;
      }
    `
  }}
`

export const StyledHeaderContainer = styled.div.attrs(addClasses('tp-h7'))`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

export const StyledHeaderCloseIcon = styled(Icon).attrs((props) => {
  return {
    ...props,
    name: 'multiply',
    size: 'xl'
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

export const StyledContentContainer = styled.div.attrs(addClasses('tp-body1 fs-md'))``
