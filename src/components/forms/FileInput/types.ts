import { FormError } from '../FormError/types'
import { ExtFile } from './utils'

export type FileInputProps = {
  name?: string
  accept?: string
  required?: boolean
  directory?: boolean
  multiple?: boolean
  value?: ExtFile | ExtFile[]
  onChange: (files?: ExtFile | ExtFile[]) => void

  label?: string
  error?: FormError
}

export type InputButtonStyle = {
  kind?: string
  variant?: string
  size?: 'sm' | 'md' | 'lg'
}
