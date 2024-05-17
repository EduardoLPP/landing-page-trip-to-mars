import { createGlobalStyle } from "styled-components";
import { pixelToRem } from "../utils/pixelToRemFunction";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        @media(max-width: 1440px){
            /* font-size: 93.75%; */
        }

        @media(max-width: 375px){
            /* font-size: 87.5%; */
        }
    }

    body{
        -webkit-font-smoothing: antialised;
        background-color: var(--space-dark);
    }
    
    body, input, textarea, button{
        font-family: "Heebo", sans-serif;
        font-weight: 400;
    }

    :root{
        --space-light: #3d68b2;
        --space-dark: #040327 ;
        --space: #0B1E8A;
        --gray-01: #0D0E13;
        --gray-02: #2C2D3A;
        --gray-03: #60616F;
        --gray-04: #898A93;
        --gray-05: #D5D5DB;
        --mars: #E85937;
        --mars-light: #FF8C70;
        --mars-dark: #CF3F1D;
        --sun: #f5d15f;
        --jupiter: #e00e34;
        --earth: #0fdd86;
        --saturn: #554ad7;
        --text: #fff;
        --background: #04032c;
        --background-section: linear-gradient(180deg, #040327 0%, #0d0e13 24.49%);

        --font-display: 800 ${pixelToRem(42)}/${pixelToRem(76)} "Heboo", sans-serif;
        --font-heading-1: 700 ${pixelToRem(32)}/${pixelToRem(48)} "Heboo", sans-serif; 
        --font-heading-2: 500 ${pixelToRem(24)}/${pixelToRem(32)} "Heboo", sans-serif;
        --font-heading-3: 400 ${pixelToRem(20)}/${pixelToRem(24)} "Heboo", sans-serif;
        --text-04: 500 ${pixelToRem(18)}/${pixelToRem(32)} "Heboo", sans-serif;
        --text-03: 500 ${pixelToRem(18)}/${pixelToRem(24)} "Heboo", sans-serif;
        --text-02: 500 ${pixelToRem(14)}/${pixelToRem(20)} "Heboo", sans-serif;
        --text-01: 400 ${pixelToRem(16)}/${pixelToRem(24)} "Heboo", sans-serif;
        --text-00: 400 ${pixelToRem(14)}/${pixelToRem(24)} "Heboo", sans-serif;
    }
`;