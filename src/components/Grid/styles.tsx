import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../styles'
import { StyledColProps, StyledRowProps } from './types'

export const StyledRow = styled.div<StyledRowProps>`
  ${(props) => {
    const {
      count = 12,
      xs = 1,
      sm = Math.ceil(count / 8),
      md = Math.ceil(count / 4),
      lg = Math.ceil(count / 2),
      xl = Math.ceil(count / 2),
      xxl = count,
      gap = '1rem',
      smGap = gap,
      mdGap = gap,
      lgGap = gap,
      xlGap = gap,
      xxlGap = gap
    } = props

    return css`
      display: grid;
      grid-gap: ${gap};
      grid-template-columns: repeat(${xs}, 1fr);

      ${getResponsiveCss('sm', css`
        grid-gap: ${smGap};
        grid-template-columns: repeat(${sm}, 1fr);
      `)}

      ${getResponsiveCss('md', css`
        grid-gap: ${mdGap};
        grid-template-columns: repeat(${md}, 1fr);
      `)}

      ${getResponsiveCss('lg', css`
        grid-gap: ${lgGap};
        grid-template-columns: repeat(${lg}, 1fr);
      `)}

      ${getResponsiveCss('xl', css`
        grid-gap: ${xlGap};
        grid-template-columns: repeat(${xl}, 1fr);
      `)}

      ${getResponsiveCss('xxl', css`
        grid-gap: ${xxlGap};
        grid-template-columns: repeat(${xxl}, 1fr);
      `)}
    `
  }}
`

export const StyledCol = styled.div<StyledColProps>`
  ${(props) => {
    const {
      span = 1,
      xs = span,
      sm = span,
      md = span,
      lg = span,
      xl = span,
      xxl = span,
      offset = 0,
      smOffset = offset,
      mdOffset = offset,
      lgOffset = offset,
      xlOffset = offset,
      xxlOffset = offset
    } = props

    if (offset) {
      return css`
        grid-column: ${offset} / span ${xs};

        ${getResponsiveCss('sm', css`
          grid-column: ${smOffset} / span ${sm};
        `)}

        ${getResponsiveCss('md', css`
          grid-column: ${mdOffset} / span ${md};
        `)}

        ${getResponsiveCss('lg', css`
          grid-column: ${lgOffset} / span ${lg};
        `)}

        ${getResponsiveCss('xl', css`
          grid-column: ${xlOffset} / span ${xl};
        `)}

        ${getResponsiveCss('xxl', css`
          grid-column: ${xxlOffset} / span ${xxl};
        `)}
      `
    } else {
      return css`
        grid-column: span ${xs};

        ${getResponsiveCss('sm', css`
          grid-column: span ${sm};
        `)}

        ${getResponsiveCss('md', css`
          grid-column: span ${md};
        `)}

        ${getResponsiveCss('lg', css`
          grid-column: span ${lg};
        `)}

        ${getResponsiveCss('xl', css`
          grid-column: span ${xl};
        `)}

        ${getResponsiveCss('xxl', css`
          grid-column: span ${xxl};
        `)}
      `
    }
  }}
`
