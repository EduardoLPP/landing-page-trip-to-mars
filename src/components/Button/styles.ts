import styled from "styled-components";

import { ButtonProps } from "." 
import { pixelToRem } from "../../utils/pixelToRemFunction";

export const ButtonContainer = styled.button<ButtonProps>`
    background: var(--mars);
    width: ${({ fullwidth }) => (fullwidth ? "100%" : pixelToRem(250)) };
    height: ${pixelToRem(58)};
    border: none;
    border-radius: ${pixelToRem(6)};
    color: var(--text);
    font: var(--text-03);
    font-weight: 700;

    &:hover{
        background: var( --mars-light);
        cursor: pointer;
        color: #000;
    }
`;