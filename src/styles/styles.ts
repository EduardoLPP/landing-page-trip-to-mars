import styled from "styled-components";
import { pixelToRem } from "../utils/pixelToRemFunction";
import { device } from "./responsive";

interface GalleryFlexProps { 
  flex?: "row" | "column"; 
  width?: string;
  margin?: string;
  justifyContent?: string;
}

export const Container = styled.div<GalleryFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.flex};
  justify-content: space-between;
  margin: ${pixelToRem(0, 100, 150, 100)};

  @media ${device.mobile} {
    margin: ${pixelToRem(17)};
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.image`
  background-image: url("/images/logo-space-y.svg");
  width: ${pixelToRem(250)};
  height: ${pixelToRem(50)};
  background-repeat: no-repeat;

  @media ${device.mobile} {
    height: ${pixelToRem(30)};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -100px;
  align-items: center;
`;

export const TranslateButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const TranslateText = styled.p`
  font: var(--text-01);
  color: var(--mars);
`;