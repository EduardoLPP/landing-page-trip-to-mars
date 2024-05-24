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
  margin: ${pixelToRem(0, 100, 150, 100)};

  @media ${device.mobile} {
    margin: ${pixelToRem(17)};
    align-items: center;
    justify-content: center;
  }
`;

export const Header = styled.div`
  display: flex;
  padding-top: ${pixelToRem(50)};
  padding-bottom: ${pixelToRem(80)};

  @media ${device.mobile} {
    padding-bottom: ${pixelToRem(78)};
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

export const HeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${pixelToRem(500)};
  padding-bottom: ${pixelToRem(32)};

  @media ${device.mobile} {
    max-width: 100vw;
    align-items: center;
    justify-content: center;
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

export const SecondTitle = styled.p`
  color: var(--text);
  font: var(--font-display);

  span {
      color: var(--mars);
  }

  @media ${device.mobile} {
    font: var(--font-mobile-heading-1);
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  color: var(--gray-05);
  font: var(--font-heading-3);
  max-width: ${pixelToRem(630)};

  @media ${device.mobile} {
    padding: ${pixelToRem(16, 0, 32, 0)};
    text-align: center;
    max-width: ${pixelToRem(307)};
  }
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

export const IconsContainer = styled(motion.div)`
  margin-top: ${pixelToRem(200)};
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
    text-align: center;
    gap: ${pixelToRem(64)};
    padding-bottom: ${pixelToRem(72)};
    max-width: ${pixelToRem(222)};

    & image {
      margin: 0 auto;
    }
  }
`;

export const SectionAbout = styled.div<GalleryFlexProps>` 
  display: flex;  
  justify-content: center;
  background: url("/images/stars.jpg"), no-repeat;
  flex-direction: ${(props) => props.flex};
  background-size: cover;

  @media ${device.mobile} {
    display: none;
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
  margin-top: ${pixelToRem(100)};
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

export const ContainerLogo = styled.div`
  margin: ${pixelToRem(50, 40, 50, 0)};
  max-width: ${pixelToRem(318)};
`;

export const DivLogo = styled.div` 
  display: flex;
  padding-bottom: ${pixelToRem(13)};
`;

export const GalleryContent = styled.div<GalleryFlexProps>`
  display: flex;
  margin: ${pixelToRem(50, 100, 250, 100)};
  align-items: center;
`;

export const SectionForm = styled.div`
  display: flex;
  background: url("/images/background-stars-form.jpg"), no-repeat;
  background-size: cover;

  @media ${device.mobile} {
    display: none;
  }
`;  

export const DivRocketImage = styled(motion.div)`
  display: flex;
`;

export const RocketImage = styled(motion.image)`
  width: ${pixelToRem(500)};
  height: ${pixelToRem(700)};
`;

export const SectionFooter = styled.div`
  display: flex;
  flex-direction: column;
  background: url("/images/background-stars-form.jpg"), no-repeat;

  @media ${device.mobile} {
    display: none;
  }
`;

export const ContainerImageSmoke = styled(motion.div)`
  width: 100%;
  max-height: ${pixelToRem(50)};
  margin-bottom: 50px;

  & img {
    width: 100%;
  }
`;

export const ContainerFooterBottom = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: ${pixelToRem(50)};
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  gap: ${pixelToRem(20)};
  padding-top: ${pixelToRem(150)};

  & img {
    width: ${pixelToRem(25)};
    height: ${pixelToRem(25)};
  }
`;

export const ContainerFooterMenu = styled.div`
  gap: ${pixelToRem(53)};
  padding-top: ${pixelToRem(150)};
  
  & ul {
    display: flex;
    list-style: none;
    gap: ${pixelToRem(53)};
  }

  & a {
    color: var(--text);
    font: var(--text-3);
    text-decoration: none;
  }
`;

export const ContainerFooterLogo = styled.div`
    display: flex;
    padding-top: ${pixelToRem(150)};
  
`;