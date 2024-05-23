import { ButtonContainer } from './styles'

export interface ButtonProps {
  title?: string,
  fullwidth?: boolean
}

export  function Button({...props} : ButtonProps) {
  return (
    <ButtonContainer fullwidth={props.fullwidth}>
      {props.title}
    </ButtonContainer>
  )
}
