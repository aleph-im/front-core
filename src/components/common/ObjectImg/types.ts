export type ObjectId =
  | 'Object1'
  | 'Object2'
  | 'Object3'
  | 'Object4'
  | 'Object5'
  | 'Object6'
  | 'Object7'
  | 'Object8'
  | 'Object9'
  | 'Object10'
  | 'Object11'
  | 'Object12'
  | 'Object13'
  | 'Object14'
  | 'Object15'
  | 'Object16'
  | 'Object17'
  | 'Object18'
  | 'Object19'
  | 'Object20'
  | 'Object21'

export type ObjectImgProps = {
  id: ObjectId
  size?: number | string
  color?: string
  color2?: string
  shape?: boolean
}

export type StyledObjectImgProps = {
  size: number | string
}

export type StyledObjectImgSvgProps = {
  color?: string
  color2?: string
}
