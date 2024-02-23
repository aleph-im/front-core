import { HTMLAttributes } from 'react'

export type PriceProps = HTMLAttributes<HTMLSpanElement> & {
  value: number | undefined
  humanReadable?: boolean
}
