import React from "react"
import { StyledLogoSvgProps } from "../types"

export const LogoSvg = ({ color = '#ffffff' }: StyledLogoSvgProps) => {
  return (
    <svg height="1.2em" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M128.176 61.5087C142.491 61.5087 154 49.9999 154 35.7543C154 21.5087 142.421 10 128.176 10C113.86 10 102.351 21.5087 102.351 35.7543C102.351 49.9999 113.86 61.5087 128.176 61.5087Z" fill={color} />
      <path d="M39.8248 149.368C54.1406 149.368 65.6493 137.859 65.6493 123.614C65.6493 109.368 54.0704 97.8594 39.8248 97.8594C25.5091 97.8594 14.0003 109.368 14.0003 123.614C13.9301 137.859 25.5091 149.368 39.8248 149.368Z" fill={color} />
      <path d="M109.86 17.5789C85.369 7.47363 56.1059 12.3157 36.1761 32.1052C16.2463 51.9648 11.4042 81.0173 21.5095 105.438L109.86 17.5789Z" fill={color} />
      <path d="M58.0713 141.859C82.5625 151.965 111.826 147.123 131.755 127.333C151.685 107.473 156.527 78.4209 146.422 53.9999L58.0713 141.859Z" fill={color} />
    </svg>
  )
}

export default LogoSvg
