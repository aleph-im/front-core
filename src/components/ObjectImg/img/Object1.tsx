import React from "react";
import { StyledObjectImgSvgProps } from "../types";

export const Object1 = ({ color = '#ffffff' }: StyledObjectImgSvgProps) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 88 98" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M44.21 51.6841L87.42 26.5832L44.21 0.888535L1 26.5832L44.21 51.6841Z" stroke={color} strokeLinecap="round"
        strokeLinejoin="round" />
      <path d="M24.7598 26.4194L28.8033 28.7739C33.8809 25.754 44.1997 19.6221 44.1997 19.6221V14.8619L24.7598 26.4194Z"
        fill={color} stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44.2095 14.8619V19.6119L59.6058 28.7739L63.6494 26.4194L44.2095 14.8619Z" stroke={color}
        strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M59.6056 28.7739L44.2093 19.6221C44.2093 19.6221 33.8905 25.7642 28.813 28.7739L44.2093 37.7209L59.6056 28.7739V28.7739Z"
        stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44.21 96.9415V51.6841L87.42 26.5832V72.1272L44.21 96.9415Z" fill={color} stroke={color}
        strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 71.2468V26.5832L44.21 51.6841V96.9415L1 71.2468Z" stroke={color} strokeLinecap="round"
        strokeLinejoin="round" />
    </svg>
  )
}

export default Object1