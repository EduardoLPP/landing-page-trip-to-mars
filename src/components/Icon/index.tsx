import React from 'react'
import { IconContainer, ImageIcon, TextIcon } from './styles'

export interface IconProps {
    src: string,
    text?: string,
    alt?: string
}
  
export function Icon({...props} : IconProps) {
  return (
    <IconContainer>
      <ImageIcon src={props.src}/>

      <TextIcon>
        {props.text}
      </TextIcon>
    </IconContainer>
  )
}
