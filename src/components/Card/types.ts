import { MouseEventHandler, ReactNode } from "react"
import { ButtonVariant } from "../Button/types"

export type CardVariant = 'block' | 'article'

export type CardProps = {
  variant: CardVariant
  headerImg: string
  titleInfo?: string
  title: string
  text: string
  buttonLabel: string
  buttonColor: string
  buttonVariant: ButtonVariant
  buttonHref: string
  buttonOnClick: MouseEventHandler
  buttonDisabled?: boolean

  header?: ReactNode
  content?: ReactNode
  footer?: ReactNode
}
