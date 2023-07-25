export type FormErrorLevel = 'warn' | 'error'
export type FormErrorType = 'required' | string

export type FormError = {
  message?: string
  type?: FormErrorType
  level?: FormErrorLevel
}

export type FormErrorProps = {
  error: FormError
}
