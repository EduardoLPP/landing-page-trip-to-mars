import styled from "styled-components";
import { pixelToRem } from "../../utils/pixelToRemFunction";
import { device } from "../../styles/responsive";
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
width: 100%;
justify-content: space-between;

@media ${device.mobile} {
  padding-bottom: ${pixelToRem(78)};
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

export const AstronautIllustration = styled.image`
  width: ${pixelToRem(450)};
  height: ${pixelToRem(580)};
  background-image: url("/images/home-mars-right.svg");
  background-repeat: no-repeat;
  position: absolute;
  right: ${pixelToRem(0)};
  top: ${pixelToRem(50)};

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