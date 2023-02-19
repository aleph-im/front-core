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
  buttonOnClick: () => void

  header?: React.ReactNode
  content?: React.ReactNode
  footer?: React.ReactNode
}
