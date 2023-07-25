import { EditorProps } from '@monaco-editor/react'
import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'
import FormError from '../FormError'
import { StyledInputWrapper } from '../styles.forms'
import { StyledMonacoEditor } from './styles'
import { CodeEditorProps } from './types'
import FormLabel from '../FormLabel'

export const CodeEditor = forwardRef(
  (
    {
      label,
      className,
      focus,
      error,
      placeholder = '// Write some code here',
      ...rest
    }: CodeEditorProps,
    ref: ForwardedRef<EditorProps>,
  ) => {
    const [isFocus, setIsFocus] = useState(focus)
    const handleFocus = useCallback(() => setIsFocus(true), [setIsFocus])
    const handleBlur = useCallback(() => setIsFocus(false), [setIsFocus])

    const isFocusClass = useMemo(
      () => (isFocus || focus ? '_focus' : ''),
      [isFocus, focus],
    )

    // @note: Storybook testing purposes
    const classes = useMemo(
      () => isFocusClass + (className || ''),
      [isFocusClass, className],
    )

    return (
      <StyledInputWrapper>
        {label && <FormLabel label={label} error={error} />}
        <StyledMonacoEditor
          {...{
            ref,
            placeholder,
            className: classes,
            onFocus: handleFocus,
            onBlur: handleBlur,
            ...rest,
          }}
        />
        {error && <FormError error={error} />}
      </StyledInputWrapper>
    )
  },
)

CodeEditor.displayName = 'CodeEditor'

export default CodeEditor
