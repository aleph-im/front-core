export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'text-only'
export type ButtonKind = 'neon' | 'flat'
export type ButtonSize = 'regular' | 'big'

export type ButtonProps = {
  label: string | JSX.Element
  variant: ButtonVariant
  kind: ButtonKind
  size: ButtonSize
  color: string
  onClick: () => void

  // Force states
  hover?: boolean
  active?: boolean
  focus?: boolean
  disabled?: boolean
  
  className?: string
}

export type StyledButtonProps = {
  variant: ButtonVariant
  kind: ButtonKind
  size: ButtonSize
  color: string
}
