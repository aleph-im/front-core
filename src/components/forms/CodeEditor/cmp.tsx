import { EditorProps } from '@monaco-editor/react'
import React, {
  FocusEvent,
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
      onFocus: onFocusProp,
      onBlur: onBlurProp,
      ...rest
    }: CodeEditorProps,
    ref: ForwardedRef<EditorProps>,
  ) => {
    const [isFocus, setIsFocus] = useState(focus)

    const handleFocus = useCallback(
      (e: FocusEvent<HTMLDivElement>) => {
        setIsFocus(true)
        onFocusProp && onFocusProp(e)
      },
      [onFocusProp],
    )

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLDivElement>) => {
        setIsFocus(false)
        onBlurProp && onBlurProp(e)
      },
      [onBlurProp],
    )

    const isFocusClass = useMemo(
      () => (isFocus || focus ? '_focus' : ''),
      [isFocus, focus],
    )

    // @note: Storybook testing purposes
    const classes = useMemo(
      () => (className ? `${className} ${isFocusClass}` : isFocusClass),
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
            error,
            ...rest,
            onFocus: handleFocus,
            onBlur: handleBlur,
          }}
        />
        {error && <FormError error={error} />}
      </StyledInputWrapper>
    )
  },
)

CodeEditor.displayName = 'CodeEditor'

export default CodeEditor
