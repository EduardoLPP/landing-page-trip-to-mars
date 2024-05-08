import styled from "styled-components";
import { pixelToRem } from "../utils/pixelToRemFunction";

interface GalleryFlexProps { flex: "row" | "column" }

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${pixelToRem(24, 112, 50, 112)};
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

export const SectionAbout = styled.div` 
    display: flex;
    justify-content: center;
    background: url("/images/stars.jpg"), no-repeat;
    flex-direction: row;
    padding-right: ${pixelToRem(100)};
    padding-left: ${pixelToRem(100)};
`;

export const ImageMars = styled.image`
    width: ${pixelToRem(800)};
    height: ${pixelToRem(800)};
    background-image: url("/images/mars.svg");
    background-repeat: no-repeat;
`;

export const AboutMain = styled.div`
    max-width: ${pixelToRem(603)};
    padding-top: ${pixelToRem(100)};
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

export const Gallery = styled.div<GalleryFlexProps>`
    display: flex;
    flex-direction: ${(props) => props.flex};
`;