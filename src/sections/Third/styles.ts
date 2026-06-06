import styled from "styled-components";
import { device } from "../../styles/responsive";
import { motion } from "framer-motion";
import { pixelToRem } from "../../utils/pixelToRemFunction";

export const SectionForm = styled.div`
  display: flex;
  background: url("/images/background-stars-form.jpg"), no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;

  @media ${device.mobile} {
    flex-direction: column;
    padding: ${pixelToRem(40, 0)};
  }
`; 

export const DivRocketImage = styled(motion.div)`
  display: flex;

  @media ${device.mobile} {
    display: none;
  }
`;

export const RocketImage = styled(motion.image)`
  width: ${pixelToRem(500)};
  height: ${pixelToRem(700)};
`;
