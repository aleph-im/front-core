export type FormErrorLevel = 'warning' | 'error'

export type FormError = {
  message?: string
  level?: FormErrorLevel
}

export type FormErrorProps = {
  error: FormError
}
