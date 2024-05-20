import styled from "styled-components";
import { pixelToRem } from "../utils/pixelToRemFunction";
import { device } from "./responsive";
import { motion } from "framer-motion";

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
    margin: ${pixelToRem(0, 100, 80, 100)};
`;

export const Header = styled.div`
    display: flex;
    padding-bottom: ${pixelToRem(95)};
`;

export const Logo = styled.image`
    background-image: url("/images/logo-space-y.svg");
    width: ${pixelToRem(250)};
    height: ${pixelToRem(50)};
    background-repeat: no-repeat;
`;

export const HeaderMain = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${pixelToRem(715)};
    padding-bottom: ${pixelToRem(32)};
`;

export const FirstTitle = styled.p`
    color: var(--sun);
    font: var(--text-03);
    text-transform: uppercase;
    letter-spacing: ${pixelToRem(5)};
`;

export const SecondTitle = styled.p`
    color: var(--text);
    font: var(--font-display);

    span {
        color: var(--mars);
    }
`;

export const Subtitle = styled.p`
    color: var(--gray-05);
    font: var(--font-heading-3);
    max-width: ${pixelToRem(630)};
`;

export const AstronautIllustration = styled.image`
    width: ${pixelToRem(450)};
    height: ${pixelToRem(580)};
    background-image: url("/images/home-mars-right.svg");
    background-repeat: no-repeat;
    position: absolute;
    right: ${pixelToRem(0)};
    top: ${pixelToRem(15)};

    @media ${device.mobile} {
    position: relative;
    order: 4;
    width: ${pixelToRem(307)};
    left: ${pixelToRem(55)};
  }

  @media (max-width: ${pixelToRem(1200)}) {
    position: relative;
    order: 4;
    width: ${pixelToRem(472)};
    height: ${pixelToRem(600)};
    left: 0;
  }
`;

export const IconsContainer = styled.div`
    margin-top: ${pixelToRem(150)};
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SectionAbout = styled.div<GalleryFlexProps>` 
    display: flex;  
    justify-content: center;
    background: url("/images/stars.jpg"), no-repeat;
    flex-direction: ${(props) => props.flex};
    background-size: cover;
`;

export const ImageMars = styled.image`
    width: ${pixelToRem(450)};
    height: ${pixelToRem(450)};
    background-image: url("/images/mars.svg");
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: ${pixelToRem(220)};
`;

export const AboutMain = styled.div<GalleryFlexProps>`
    max-width: ${pixelToRem(603)};
    padding-top: ${pixelToRem(50)};
    margin: ${(props) => props.margin};
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

export const ContainerAbout = styled.div<GalleryFlexProps>`
    display: flex;
    flex-direction: ${(props) => props.flex};
    justify-content: space-between;
    margin-top: ${pixelToRem(180)};
`;

export const TextLogo = styled.text`
    font: var(--font-heading-1);
    color: var(--text); 

    span {
        color: var(--mars);
    }
`;

export const TextSubscribe = styled.div`
    font: var(--text-3);
    color: var(--mars);

    &:hover{
        cursor: pointer;
        color: var( --mars-light);
    }
`;

export const ContainerLogo = styled.div`
    margin: ${pixelToRem(50, 40, 50, 0)};
    max-width: ${pixelToRem(318)};
`;

export const DivLogo = styled.div`  
    max-width: ${pixelToRem(350)};
    margin-right: ${pixelToRem(400)};
`;

export const GalleryContent = styled.div<GalleryFlexProps>`
    display: flex;
    margin: ${pixelToRem(50, 100, 157, 100)};
    align-items: center;
`;


export const SectionForm = styled.div`
    display: flex;
    width: 100%;
    background: url("/images/background-stars-form.jpg") no-repeat;
    background-size: cover;
    justify-content: space-around;
`;  


export const DivRocketImage = styled(motion.div)`
  display: flex;
`;

export const RocketImage = styled(motion.image)`
  width: ${pixelToRem(980)};
  height: ${pixelToRem(980)};
`;
