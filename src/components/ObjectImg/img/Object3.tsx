import React from "react";
import { StyledObjectImgSvgProps } from "../types";

export const Object3 = ({ color = '#ffffff' }: StyledObjectImgSvgProps) => {
  return (
    <svg width="auto" height="auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M51.25 8.95999V70.96L91.04 49.08L51.25 8.95999Z" stroke={color} stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M51.25 89.18V70.96L91.04 49.08L51.25 89.18Z" fill={color} stroke={color} stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M51.25 8.95999V70.96L11.46 49.08L51.25 8.95999Z" stroke={color} stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M51.25 89.18V70.96L11.46 49.08L51.25 89.18Z" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export default Object3