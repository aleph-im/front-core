import styled, { css } from 'styled-components'

export const StyledTag = styled.span.attrs((props) => {
  return {
    ...props,
    className: `${
      props.className || ''
    } fx-glass-base1 fx-glass-border-base0` as string,
  }
})`
  ${({ theme }) => {
    const { color } = theme.component.tag

    return css`
      display: inline-block;
      padding: 0.5rem 1.125rem;
      color: ${color.text};
      background: ${color.background};
      border: 0.0625rem solid ${color.border};
      margin: 0 auto;
      border-radius: 0.5rem;
    `
  }}
`
