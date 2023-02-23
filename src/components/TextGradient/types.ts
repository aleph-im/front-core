import { Typo, TypoKind } from "../../themes/types"

export type TextGradientProps = {
  children: React.ReactNode
  size?: number | string
  color?: string
  type?: TypoKind
  className?: string
}

export type StyledTextGradientProps = {
  size?: number | string
  color: string
  typo: Typo
}
