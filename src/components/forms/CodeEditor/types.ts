import { EditorProps } from '@monaco-editor/react'
import { FormErrorInfo } from '../FormError/types'

export type CodeEditorProps = Omit<EditorProps, 'theme'> & {
  placeholder?: string

  label?: string
  error?: FormErrorInfo

  // Force states
  focus?: boolean
  disabled?: boolean
}
