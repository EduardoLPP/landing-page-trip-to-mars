import styled from "styled-components";
import { device } from "../../styles/responsive";
import { motion } from "framer-motion";
import { pixelToRem } from "../../utils/pixelToRemFunction";

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
