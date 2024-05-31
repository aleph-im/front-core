import { FormError } from '../FormError/types'

export type FileInputProps = {
  name?: string
  accept?: string
  required?: boolean
  onlyFolders?: boolean
  onlyFiles?: boolean

  multiple?: boolean
  value?: File | File[]
  onChange: (files?: File | File[]) => void

  label?: string
  error?: FormError
}

export type InputButtonStyle = {
  kind?: string
  variant?: string
  size?: 'sm' | 'md' | 'lg'
}
