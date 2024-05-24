import styled from "styled-components";
import { pixelToRem } from "../../utils/pixelToRemFunction";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    background: var(--background-form);
    border-radius: ${pixelToRem(10)};
    align-items: center;
    justify-content: center;
    padding: ${pixelToRem(25, 30, 20, 30)};
    margin-left: ${pixelToRem(150)};
    margin-right: ${pixelToRem(150)};
    max-height: ${pixelToRem(580)};
`;

export const IconForm = styled.div`
    background: url("/images/icon-ticket.svg"), no-repeat;
    width: ${pixelToRem(56)};
    height: ${pixelToRem(56)};
    margin-left: ${pixelToRem(25)};
`;

export const TitleForm = styled.div`
    font: var(--font-heading-2);
    color: var(--text);
    max-width: ${pixelToRem(400)};
    padding-top: ${pixelToRem(20)};
    padding-bottom: ${pixelToRem(10)};
    margin-left: ${pixelToRem(25)};
`;
export const SubtitleForm = styled.div`
    font: var(--font-heading-3);
    color: var(--gray-05);
    max-width: ${pixelToRem(308)};
    margin-left: ${pixelToRem(25)};
    padding-bottom: ${pixelToRem(10)};
`;

export const ContainerInputCheckbox = styled.div`
    display: flex;
    padding: ${pixelToRem(24, 0, 32, 0)};
`;

export const InputCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: ${pixelToRem(18)};
  height: ${pixelToRem(18)};
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
  font: var(--text-01);
  color: var(--gray-05);
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
`;