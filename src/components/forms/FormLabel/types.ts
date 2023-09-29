import { FormError } from '../FormError/types'

export type FormLabelProps = {
  label: string
  error?: FormError
  required?: boolean
}
