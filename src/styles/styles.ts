import styled from "styled-components";
import { pixelToRem } from "../utils/pixelToRemFunction";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${pixelToRem(24, 112, 50, 112)};
    width: 100vw;
    height: 100vh2;
`;

export const Header = styled.div`
    display: flex;
    padding-bottom: ${pixelToRem(95)};
`;

export const Logo = styled.image`
    background-image: url("/images/logo-space-y.svg");
    width: ${pixelToRem(201)};
    height: ${pixelToRem(41)};
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
`;

export const IconsContainer = styled.div`
    margin-top: ${pixelToRem(135)};
    justify-content: space-between;
    max-width: ${pixelToRem(1440)};
    display: flex;
    flex-direction: row;
    align-items: center;
`;