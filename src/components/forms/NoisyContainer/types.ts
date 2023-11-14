import { ReactNode } from 'react'

export type NoisyContainerProps = {
  $type?: 'base' | 'dark' | 'light'
  children: ReactNode
}
