import styled from 'styled-components'

export const PositionFixed = styled.div`
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 700px;
    top: 0;
    left: 0;
`

export const MainBanner = styled.div`
    position: relative;

    img {
        width: 100%;
        height: 700px;
        object-fit: cover;
    }

    .slick-dots {
        bottom: 10px !important;     
    }

    .slick-next {
        right: 0px;
        width: 80px !important;
        z-index: 10;
        opacity: 1;
        
    &:before {
        color: black;
        font-size: 3rem !important;
        }
    }

    .slick-prev {
        left: 10px;
        font-size: 1rem;
        z-index: 10;
        opacity: 1;

    &:before {
        color: black;
        font-size: 3rem !important;
        }
    }

    @media ( width < 425px ) {
        min-height: 400px;
        height: 15vh;
    }
`

export const WhiteFade = styled.div`
    width: 100%;
    height: 50%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
`