import styled from "styled-components";
import { motion } from "framer-motion";
import { pixelToRem } from "../../utils/pixelToRemFunction";

export const Container = styled(motion.form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font: var(--text-01);
  color: var(--text);
  padding: ${pixelToRem(7, 0)};
`;

export const Input = styled.input`
  width: ${pixelToRem(360)};
  height: ${pixelToRem(40)};
  border: 1px solid var(--gray-05);
  border-radius: ${pixelToRem(6)};
  background: var(--background-form);
  font: var(--text-1);
  color: var(--text);
  padding-left: ${pixelToRem(10)};
`;