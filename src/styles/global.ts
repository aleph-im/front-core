import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => {
    return css`
      @import "${theme.font.url}";

      body {
        font-family: ${theme.font.family.body};
        color: ${theme.color.text};
      }
    `
  }}
`
export default GlobalStyle