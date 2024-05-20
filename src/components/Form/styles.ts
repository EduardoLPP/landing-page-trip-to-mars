import styled from "styled-components";
import { pixelToRem } from "../../utils/pixelToRemFunction";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    background: var(--background-form);
    border-radius: ${pixelToRem(20)};
    align-items: center;
    justify-content: center;
    padding: ${pixelToRem(39, 51, 61, 52)};
    margin-left: ${pixelToRem(120)};
    max-height: ${pixelToRem(792)};
`;

export const FormComponent = styled(motion.form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font: var(--text-1);
  color: var(--text);
  padding: ${pixelToRem(24, 0)};
`;

export const Input = styled.input`
  width: ${pixelToRem(416)};
  height: ${pixelToRem(56)};
  border: 1px solid var(--gray-05);
  border-radius: ${pixelToRem(6)};
  background: var(--background-form);
  font: var(--text-1);
  color: var(--text);
  padding-left: ${pixelToRem(10)};
`;

export const IconForm = styled.div`
    background: url("/images/icon-ticket.svg") no-repeat;
    width: ${pixelToRem(56)};
    height: ${pixelToRem(56)};
`;

export const TitleForm = styled.div`
    font: var(--font-heading-2);
    color: var(--text);
    max-width: ${pixelToRem(264)};
    padding-top: ${pixelToRem(16)};
`;
export const SubtitleForm = styled.div`
    font: var(--heading-3);
    color: var(--gray-05);
    max-width: ${pixelToRem(308)};
`;

export const DivInputCheckbox = styled.div`
    display: flex;
    padding: ${pixelToRem(24, 0, 32, 0)};
`;

export const InputCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: ${pixelToRem(24)};
  height: ${pixelToRem(24)};
  border: 1px solid var(--gray-05);
  margin-right: ${pixelToRem(16)};
  appearance: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  content: "";

  &:checked {
    background-color: var(--mars);
  }
`;

export const TextCheckbox = styled.p`
  font: var(--text-1);
  color: var(--gray-05);
`;