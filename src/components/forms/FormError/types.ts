export type FormErrorType = 'warn' | 'error'

export type FormErrorInfo = {
  message: string
  type?: FormErrorType
}

export type FormErrorProps = {
  error: FormErrorInfo
}
