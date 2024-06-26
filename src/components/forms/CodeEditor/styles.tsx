import tw from 'twin.macro'
import styled, { css, DefaultTheme } from 'styled-components'
import Editor, { EditorProps } from '@monaco-editor/react'
import { addClasses } from '../../../utils'
import { CodeEditorProps } from './types'

export const StyledMonacoEditor = styled(Editor).attrs<CodeEditorProps>(
  (props) => {
    const { onFocus, onBlur, ...rest } = props

    return {
      ...addClasses('tp-form')(rest),

      height: '100%',
      width: '100%',
      theme: 'vs-dark',
      $theme: rest.theme,
      options: {
        minimap: { enabled: false },
        lineNumbers: 'off',
      },
      wrapperProps: {
        style: { padding: 0 },
        onFocus,
        onBlur,
      },
    } as EditorProps
  },
)<CodeEditorProps & { $theme?: DefaultTheme }>`
  ${({ $theme, error }) => css`
    ${tw`p-5`}
    border-radius: 0.5rem;
    background: transparent;
    font-size: 1rem;
    height: 100%;
    width: 100%;
    height: 14rem;
    min-height: 3.25rem;

    background-clip: border-box;
    background-origin: border-box;
    background-position: 0 0;
    background: linear-gradient(91.23deg, #ffffff11 11.38%, #ffffff00 96.5%),
      linear-gradient(84.86deg, #2260ff0c 65.23%, #1859ff00 99.89%), #141327;
    border: 0.0625rem solid #ffffff1a;

    &::placeholder {
      mix-blend-mode: normal;
      color: ${$theme?.color.white};
      opacity: 0.4;
    }

    & .monaco-editor {
      font-family: -apple-system, BlinkMacSystemFont, Segoe WPC, Segoe UI,
        HelveticaNeue-Light, system-ui, Ubuntu, Droid Sans, sans-serif;
      --monaco-monospace-font: 'SF Mono', Monaco, Menlo, Consolas, 'Ubuntu Mono',
        'Liberation Mono', 'DejaVu Sans Mono', 'Courier New', monospace;
      position: relative;
      overflow: visible;
      -webkit-text-size-adjust: 100%;

      &,
      & .monaco-editor-background,
      & .inputarea.ime-input,
      & .margin {
        background-color: transparent;
      }

      & .view-overlays .current-line {
        display: none;
        border: 0.0625rem solid ${$theme?.color.white}1A;
      }

      & .margin {
        display: none;
      }

      & .editor-scrollable {
        left: 0 !important;
        width: 100% !important;
      }

      & .scroll-decoration {
        box-shadow: none;
      }
    }

    &&._focus,
    &&:focus {
      border-color: ${$theme?.color.white};
      & .monaco-editor .view-overlays .current-line {
        display: block;
      }
    }

    && {
      ${() => {
        if (!error) return ''

        if (error.level === 'warning') {
          return css`
            border-color: ${$theme?.color.warning};
          `
        } else {
          return css`
            border-color: ${$theme?.color.error};
          `
        }
      }}
    }
  `}
`
