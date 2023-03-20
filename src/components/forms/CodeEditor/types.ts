import { EditorProps } from "@monaco-editor/react"
import { FormErrorInfo } from "../FormError/types"

export type CodeEditorProps = Omit<EditorProps, 'theme'> & {
  label?: string
  placeholder?: string
  error?: FormErrorInfo

  // Force states
  focus?: boolean
  disabled?: boolean
}
