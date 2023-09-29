import { EditorProps } from '@monaco-editor/react'
import { FormError } from '../FormError/types'
import { HTMLAttributes } from 'react'

export type CodeEditorProps = Omit<EditorProps, 'theme'> &
  HTMLAttributes<HTMLDivElement> & {
    placeholder?: string

    label?: string
    required?: boolean
    error?: FormError

    // Force states
    focus?: boolean
    disabled?: boolean
  }
