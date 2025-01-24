# Aleph Cloud frontend core package

## Usage

1. Install Styled Components

   ```sh
   npm i --save-dev styled-components
   ```

1. Set the desired theme

   ```tsx
   import { ThemeProvider } from "styled-components";
   import { themes } from "@aleph-front/core";

   function App() {
     return (
       <ThemeProvider theme={themes.aleph}>
         <div>...</div>
       <ThemeProvider />
     );
   ```

1. Start using the Components

   ```tsx
   import { ThemeProvider } from "styled-components";
   import { themes, Logo } from "@aleph-front/core";

   function App() {
     return (
       <ThemeProvider theme={themes.aleph}>
         <Logo text="Node Metrics" />
       </ThemeProvider>
     );
   }
   ```

   > See all components in the [StoryBook](https://aleph-im.github.io/front-core)

## Get started as developer

### Set up font awesome in your local environment

Before start, obtain a valid package token and set the env var `FONTAWESOME_NPM_AUTH_TOKEN`
Follow [this guide](https://fontawesome.com/docs/web/setup/packages#set-up-npm-token-for-all-projects) for configuring your local npm config

### Known issues and workarounds

- Using `aleph-core` with `Next.js` framework:
  - Problems with css `@import` syntaxis. You will need to manually import the font-face css from an url via `<link>` html element, or by creating a `font.css` that will contain the `@import` statement and will be imported from the `_app.tsx` Next.js file
  - Problems with font awesome stylesheet. Follow this guide to solve it: https://fontawesome.com/docs/web/use-with/react/use-with#next-js

### We strongly recomend to use styled-components tailwind and twin.macro in your project

Follow this guide: https://github.com/ben-rogerson/twin.examples/tree/master/next-styled-components-typescript#getting-started
