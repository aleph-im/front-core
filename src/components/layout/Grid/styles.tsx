import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../../styles'
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
      gap = '1rem',
      xsGap = gap,
      smGap = xsGap,
      mdGap = smGap,
      lgGap = mdGap,
      xlGap = lgGap,
    } = props

    const xl2 = props['2xl'] || xl
    const xl2Gap = props['2xlGap'] || xlGap

    return css`
      display: grid;
      grid-gap: ${xsGap};
      grid-template-columns: repeat(${xs}, 1fr);

      ${getResponsiveCss(
        'sm',
        css`
          grid-gap: ${smGap};
          grid-template-columns: repeat(${sm}, 1fr);
        `,
      )}

      ${getResponsiveCss(
        'md',
        css`
          grid-gap: ${mdGap};
          grid-template-columns: repeat(${md}, 1fr);
        `,
      )}

      ${getResponsiveCss(
        'lg',
        css`
          grid-gap: ${lgGap};
          grid-template-columns: repeat(${lg}, 1fr);
        `,
      )}

      ${getResponsiveCss(
        'xl',
        css`
          grid-gap: ${xlGap};
          grid-template-columns: repeat(${xl}, 1fr);
        `,
      )}

      ${getResponsiveCss(
        '2xl',
        css`
          grid-gap: ${xl2Gap};
          grid-template-columns: repeat(${xl2}, 1fr);
        `,
      )}
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
      offset = 0,
      xsOffset = offset,
      smOffset = xsOffset,
      mdOffset = smOffset,
      lgOffset = mdOffset,
      xlOffset = lgOffset,
    } = props

    const xl2 = props['2xl'] || xl
    const xl2Offset = props['2xlOffset'] || xlOffset

    return css`
      grid-column: ${`${xsOffset ? `${xsOffset} / ` : ''} span ${xs}`};

      ${getResponsiveCss(
        'sm',
        css`
          grid-column: ${`${smOffset ? `${smOffset} / ` : ''} span ${sm}`};
        `,
      )}

      ${getResponsiveCss(
        'md',
        css`
          grid-column: ${`${mdOffset ? `${mdOffset} / ` : ''} span ${md}`};
        `,
      )}

      ${getResponsiveCss(
        'lg',
        css`
          grid-column: ${`${lgOffset ? `${lgOffset} / ` : ''} span ${lg}`};
        `,
      )}

      ${getResponsiveCss(
        'xl',
        css`
          grid-column: ${`${xlOffset ? `${xlOffset} / ` : ''} span ${xl}`};
        `,
      )}

      ${getResponsiveCss(
        '2xl',
        css`
          grid-column: ${`${xl2Offset ? `${xl2Offset} / ` : ''} span ${xl2}`};
        `,
      )}
    `
  }}
`
