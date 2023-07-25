import { EditorProps } from '@monaco-editor/react'
import { FormError } from '../FormError/types'

export type CodeEditorProps = Omit<EditorProps, 'theme'> & {
  placeholder?: string

  label?: string
  error?: FormError

  // Force states
  focus?: boolean
  disabled?: boolean
}
