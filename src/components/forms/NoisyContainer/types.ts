import { ReactNode } from 'react'

export type NoisyContainerProps = {
  type?:
    | 'noise-base'
    | 'noise-dark'
    | 'noise-light'
    | 'grain-0'
    | 'grain-1'
    | 'grain-2'
    | 'grain-3'
    | 'grain-4'
    | 'grain-5'
  animation?: number | false
  children: ReactNode
}
