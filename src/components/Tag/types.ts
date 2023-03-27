import { HTMLAttributes, ReactNode } from "react"

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
}
