import { FormError } from '../FormError/types'

export type FileInputProps = {
  name?: string
  multiple?: boolean
  accept?: string
  required?: boolean
  value?: File[]
  defaultValue?: string | string[]
  onChange: (files?: File[]) => void

  onlyFolders?: boolean
  onlyFiles?: boolean

  label?: string
  error?: FormError
}

export type InputButtonStyle = {
  kind?: string
  variant?: string
  size?: 'sm' | 'md' | 'lg'
}
