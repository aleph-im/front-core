import styled, { css, DefaultTheme } from 'styled-components'
import Editor, { EditorProps } from "@monaco-editor/react";
import { addClasses } from '../../../utils'
import { CodeEditorProps } from './types';

export const StyledMonacoEditor = styled(Editor).attrs<CodeEditorProps>(props => {
  return {
    ...addClasses('fx-glass-base0 fx-glass-border-base0 p-md tp-form')(props),
    height: "100%",
    width: "100%",
    defaultLanguage: "javascript",
    theme: 'vs-dark',
    $theme: props.theme,
    options: {
      minimap: { enabled: false },
      lineNumbers: "off",
    },
    wrapperProps: {
      ...addClasses('p-0')(props),
    }
  } as EditorProps
}) <CodeEditorProps & { $theme?: DefaultTheme }>`
  ${({ $theme }) => css`
    border-radius: 8px;
    background: transparent;
    font-size: 1rem;
    height: 100%;
    width: 100%;
    height: 14rem;
    min-height: 3.25rem;

    &::placeholder {
      text-transform: capitalize;
      mix-blend-mode: normal;
      opacity: 0.4;
    }

    & .monaco-editor {
      font-family: -apple-system,BlinkMacSystemFont,Segoe WPC,Segoe UI,HelveticaNeue-Light,system-ui,Ubuntu,Droid Sans,sans-serif;
      --monaco-monospace-font: "SF Mono",Monaco,Menlo,Consolas,"Ubuntu Mono","Liberation Mono","DejaVu Sans Mono","Courier New",monospace;
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
        border: 1px solid ${$theme?.color.text}1A;
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

    &._focus {
      border-color: ${$theme?.color.text};
      & .monaco-editor .view-overlays .current-line {
        display: block;
      }
    }
  `}
`