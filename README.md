# Aleph.im frontend core package

## Get started as developer

### Set up font awesome in your local environment

Before start, obtain a valid package token and set the env var `FONTAWESOME_NPM_AUTH_TOKEN` 
Follow [this guide](https://fontawesome.com/docs/web/setup/packages#set-up-npm-token-for-all-projects) for configuring your local npm config

### Known issues and workarounds

- Using `aleph-core` with `Next.js` framework:
  - Problems with css `@import` syntaxis. You will need to manually import the font-face css from an url via `<link>` html element, or by creating a `font.css` that will contain the `@import` statement and will be imported from the `_app.tsx` Next.js file
  - Problems with font awesome stylesheet. Follow this guide to solve it: https://fontawesome.com/docs/web/use-with/react/use-with#next-js