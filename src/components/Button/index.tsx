import React from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  title : string
}

export  function Button({...props} : ButtonProps) {
  return (
    <ButtonContainer>
      {props.title}
    </ButtonContainer>
  )
}
