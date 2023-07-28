export type FormErrorLevel = 'warn' | 'error'

export type FormError = {
  message?: string
  level?: FormErrorLevel
}

export type FormErrorProps = {
  error: FormError
}
