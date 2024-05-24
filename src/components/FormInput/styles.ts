import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.form)`
  position: relative;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: #999;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;

  &:focus {
    outline: none;
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    top: -20px;
    font-size: 12px;
    color: #5264AE;
  }

  &:focus ~ .bar:before,
  &:focus ~ .bar:after {
    width: 50%;
  }
`;

export const Bar = styled.div`
  position: relative;
  display: block;
  width: 100%;

  &:before,
  &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264AE;
    transition: 0.2s ease all;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
`;