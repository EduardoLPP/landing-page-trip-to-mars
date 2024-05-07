import styled from "styled-components";

function pixelToRem(...values: number[]){
    return values
        .reduce((acc, current) => (acc += current / 16 + `rem `), "")
        .trim()
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${pixelToRem(24, 112, 50, 112)};
    width: 100vw;
    height: 100vh2;
`;

export const Header = styled.div`
    display: flex;
`;

export const Logo = styled.image`
    background-image: url("/images/logo-space-y.svg");
    width: ${pixelToRem(201)};
    height: ${pixelToRem(41)};
`;

export const HeaderMain = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FirstTitle = styled.p`
    color: var(--sun);
    font: var(--text-03);
    text-transform: uppercase;
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
`;

export const AstronautIllustration = styled.image`

`;