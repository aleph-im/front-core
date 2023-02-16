export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'text-only'
export type ButtonKind = 'neon' | 'flat'
export type ButtonSize = 'regular' | 'big'

export type ButtonProps = {
  label: string
  variant: ButtonVariant
  kind: ButtonKind
  size: ButtonSize
  color: string

  // Force states
  hover?: boolean
  active?: boolean
  focus?: boolean
  disabled?: boolean
}

export type StyledButtonProps = {
  variant: ButtonVariant
  kind: ButtonKind
  size: ButtonSize
  color: string
}
