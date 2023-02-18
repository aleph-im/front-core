import { ObjectId } from "./img"

export type ObjectImgProps = {
  id: ObjectId,
  size: number | string
  color?: string
  color2?: string
}

export type StyledObjectImgProps = {
  size: number | string
}

export type StyledObjectImgSvgProps = {
  color?: string
  color2?: string
}
