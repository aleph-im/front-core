export type ObjectId =
  | 'Object1'
  | 'Object2'
  | 'Object3'
  | 'Object4'
  | 'Object5'
  | 'Object6'
  | 'Object7'
  | 'Object8'

export type ObjectImgProps = {
  id: ObjectId
  size?: number | string
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
