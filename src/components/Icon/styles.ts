import styled from "styled-components";
import { IconProps } from "." 
import { pixelToRem } from "../../utils/pixelToRemFunction";

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${pixelToRem(216)};
`;

export const ImageIcon = styled.image<IconProps>`
    width: ${pixelToRem(56)};
    height: ${pixelToRem(56)};
    background: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
`;

export const TextIcon = styled.p`
    color: var(--gray-05);
    font: var(--text-01);
    padding-top: ${pixelToRem(8.5)}
`;