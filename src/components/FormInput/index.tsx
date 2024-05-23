
import { Container, Input, Label } from "./styles";


export interface FormProps {
  text: string;
  type?: "text" | "email" | "number";
}

export function FormInput({...props }: FormProps) {
  return (
      <Container>
        <Label>
          {props.text}
        </Label>

        <Input />
      </Container>
  );
}
