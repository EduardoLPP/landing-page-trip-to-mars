import styled from "styled-components";
import { device } from "../../styles/responsive";
import { pixelToRem } from "../../utils/pixelToRemFunction";
import { motion } from "framer-motion";

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

export const ContainerSocialMedia = styled.div`
  display: flex;
  gap: ${pixelToRem(20)};
  padding-top: ${pixelToRem(150)};

  & img {
    width: ${pixelToRem(25)};
    height: ${pixelToRem(25)};
  }
`;
