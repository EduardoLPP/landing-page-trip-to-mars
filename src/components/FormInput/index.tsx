import './styles.css';
import { useState } from "react";


export interface FormProps {
  text: string;
  type?: "text" | "email" | "number";
}

export function FormInput({...props }: FormProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (value === '') {
      setIsFocused(false);
    }
  };

  const handleChange = (e : any) => {
    setValue(e.target.value);
  };

  return (
    <div className={`input-container ${isFocused || value ? 'focused' : ''}`}>
      <input
        type={props.type}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        required
      />
      <label>{props.text}</label>
    </div>
  );
}
