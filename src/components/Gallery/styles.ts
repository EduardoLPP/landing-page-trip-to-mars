import styled from "styled-components";
import { keyframes } from "styled-components"
import { pixelToRem } from "../../utils/pixelToRemFunction";

const swiper = keyframes`
    from {
        transform: translateX(0)
    }

    to {
        transform: translateX(calc(-100px * 7));
    }
`;

interface ImageGalleryProps {
    width?: number;
    height?: number;
    src: string; 
}

interface GalleryFlexProps { 
    flex?: "row" | "column"; 
    width?: string;
    margin?: string;
    justifyContent?: string;
}

export const Container = styled.div`
    display: flex;
    max-width: ${pixelToRem(1075)};
    border-radius: ${pixelToRem(12)};

    & .swiper-button-prev {
        color: var(--mars);
    }
    & .swiper-button-next {
        color: var(--mars);
    }
`;

export const ContainerImage = styled.div`
    display: flex;
`;

export const ImageGallery = styled.img<ImageGalleryProps>`
    width: ${(props) => props.width && pixelToRem(props.width)};
    height: ${(props) => props.height && pixelToRem(props.height)};
    background-repeat: no-repeat;
    border-radius: ${pixelToRem(15)};
    src: ${(props) => props.src};
    object-fit: cover;
    animation: ${swiper} 30s linear infinite ;
`;
