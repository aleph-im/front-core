import { HTMLAttributes, ReactNode } from 'react'

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: 'default' | 'accent'
  children: ReactNode
}
