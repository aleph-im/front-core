import { HTMLAttributes } from 'react'

export type LabelVariant = 'success' | 'warning' | 'error' | 'info'

export type LabelKind = 'primary' | 'secondary'

export type LabelProps = HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode
  variant?: LabelVariant
  kind?: LabelKind
}
