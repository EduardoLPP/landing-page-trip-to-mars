import styled from "styled-components";
import { device } from "../../styles/responsive";
import { pixelToRem } from "../../utils/pixelToRemFunction";
import { motion } from "framer-motion";

interface GalleryFlexProps { 
    flex?: "row" | "column"; 
    width?: string;
    margin?: string;
    justifyContent?: string;
  }

export const SectionAbout = styled.div<GalleryFlexProps>`
  display: flex;
  justify-content: center;
  background: url("/images/stars.jpg"), no-repeat;
  flex-direction: ${(props) => props.flex};
  background-size: cover;
`;

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

export const ContainerAbout = styled.div<GalleryFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.flex};
  justify-content: space-between;
  margin-top: ${pixelToRem(100)};

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    margin-top: ${pixelToRem(50)};
  }
`;

export const ImageMars = styled(motion.image)`
  width: ${pixelToRem(450)};
  height: ${pixelToRem(450)};
  background-image: url("/images/mars.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  margin-right: ${pixelToRem(220)};
  background-position: center;

  @media ${device.mobile} {
    width: ${pixelToRem(220)};
    height: ${pixelToRem(220)};
    margin-right: 0;
    margin-bottom: ${pixelToRem(24)};
  }
`;

export const AboutMain = styled.div<GalleryFlexProps>`
  max-width: ${pixelToRem(603)};
  padding-top: ${pixelToRem(50)};
  margin: ${(props) => props.margin};

  @media ${device.mobile} {
    max-width: 100%;
    padding: ${pixelToRem(0, 16)};
    margin: 0;
    text-align: center;
  }
`;

export const FirstTitle = styled.p`
  color: var(--sun);
  font: var(--text-03);
  text-transform: uppercase;
  letter-spacing: ${pixelToRem(5)};

  @media ${device.mobile} {
    font: var(--font-mobile-text-1);
    letter-spacing: ${pixelToRem(5)};
    padding-bottom: ${pixelToRem(11)};
  }
`;

export const SecondSubTitle = styled.p`
  font: var(--font-heading-1);
  color: var(--text);
  padding-top: ${pixelToRem(14)};
`;

export const TextAbout = styled.p`
  font: var(--text-01);
  color: var(--gray-05);
  padding-top: ${pixelToRem(26)};
`;

export const GalleryContent = styled.div<GalleryFlexProps>`
  display: flex;
  margin: ${pixelToRem(50, 100, 250, 100)};
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
    margin: ${pixelToRem(40, 16, 80, 16)};
    align-items: flex-start;
  }
`;

export const ContainerLogo = styled.div`
  margin: ${pixelToRem(50, 40, 50, 0)};
  max-width: ${pixelToRem(318)};

  @media ${device.mobile} {
    margin: ${pixelToRem(0, 0, 32, 0)};
    max-width: 100%;
  }
`;

export const DivLogo = styled.div` 
  display: flex;
  padding-bottom: ${pixelToRem(13)};
`;

export const TextLogo = styled.text`
  font: var(--font-heading-1);
  color: var(--text); 

  span {
      color: var(--mars);
  }
`;

export const TextSubscribe = styled(motion.p)`
  font: var(--text-04);
  color: var(--mars);

  &:hover{
      cursor: pointer;
      color: var(--mars-light);
  }
`;