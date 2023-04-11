import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../styles'
import { StyledColProps, StyledRowProps } from './types'

export const StyledRow = styled.div<StyledRowProps>`
  ${(props) => {
    const {
      count = 12,
      xs = count,
      sm = xs,
      md = sm,
      lg = md,
      xl = lg,
      xxl = xl,
      gap = '1rem',
      xsGap = gap,
      smGap = xsGap,
      mdGap = smGap,
      lgGap = mdGap,
      xlGap = lgGap,
      xxlGap = xlGap
    } = props

    return css`
      display: grid;
      grid-gap: ${xsGap};
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
      sm = xs,
      md = sm,
      lg = md,
      xl = lg,
      xxl = xl,
      offset = 0,
      xsOffset = offset,
      smOffset = xsOffset,
      mdOffset = smOffset,
      lgOffset = mdOffset,
      xlOffset = lgOffset,
      xxlOffset = xlOffset
    } = props

    return css`
      grid-column: ${`${xsOffset ? `${xsOffset} / ` : ''} span ${xs}`};

      ${getResponsiveCss('sm', css`
        grid-column: ${`${smOffset ? `${smOffset} / ` : ''} span ${sm}`};
      `)}

      ${getResponsiveCss('md', css`
        grid-column: ${`${mdOffset ? `${mdOffset} / ` : ''} span ${md}`};
      `)}

      ${getResponsiveCss('lg', css`
        grid-column: ${`${lgOffset ? `${lgOffset} / ` : ''} span ${lg}`};
      `)}

      ${getResponsiveCss('xl', css`
        grid-column: ${`${xlOffset ? `${xlOffset} / ` : ''} span ${xl}`};
      `)}

      ${getResponsiveCss('xxl', css`
        grid-column: ${`${xxlOffset ? `${xxlOffset} / ` : ''} span ${xxl}`};
      `)}
    `
  }}
`
