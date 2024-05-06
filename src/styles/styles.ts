import styled from "styled-components";

function pixelToRem(...values: number[]){
    return values
        .reduce((acc, current) => (acc += current / 16 + `rem `), "")
        .trim()
}

export const Header = styled.div`
    display: flex;
    background-color: var(--space);
    width: 100%;
`;

export const Logo = styled.image`
    width: ${pixelToRem(201)};
    height: ${pixelToRem(41)};
`;

export const HeaderMain = styled.div`

`;

export const Title = styled.label`

`;

export const Subtitle = styled.label`

`;