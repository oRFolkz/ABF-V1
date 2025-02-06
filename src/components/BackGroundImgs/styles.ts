import styled from 'styled-components'
import { colors } from '../../styles.ts'

export const PositionFixed = styled.div`
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 700px;
    top: 0;
    left: 0;
`

export const FormCard = styled.div`
    padding: 2rem;
    padding-top: 1rem;
    width: 400px;
    height: 400px;
    border-radius: 1rem;
    position: fixed;
    z-index: 200;
    top: 50%;
    left: 50%;
    transform: translate(5%, -65%);
    background: ${colors.grey};
    box-shadow: 0px 0px 20px 10px black;

    animation: FormDown 1s ease;

    @keyframes FormDown {
        0% { top: 0%; }
        50% { top: 55%; }
        100% { top: 50%; }
    }

    input {
        width: 95%;
        height: 30px;
        padding: 0 .5rem;
        font-weight: bold;
        border: 2px solid ${colors.gold};

        &:hover {
            border: 2px solid black;
            border-radius: 2px;
        }
    }

    textarea {
        resize: none;
        width: 97%;
        height: 150px;
        padding: .5rem 0 0 .5rem;
        font-weight: bold;
        border: 2px solid ${colors.gold};

        &:hover {
            border: 2px solid black;
            border-radius: 2px;
        }
    }

    p {
        margin: 1rem 0 .2rem 0;
        color: white;
        font-weight: bold;
    }

    button {
        margin: 1rem 0;
        padding: .8rem 0;
        width: 100%;

        font-weight: bold;
        font-size: 1rem;

        background: rgb(202, 168, 88);
        background: radial-gradient(circle, rgba(202, 168, 88, 1) 0%, rgb(218, 184, 107) 60%, rgba(202, 168, 88, 1) 100%);
        box-shadow: 2px 2px 10px 0px ${colors.gold};
        border-radius: 10px;
        border: none;

        transition: all .2s ease;

        &:hover {
            color: white;
            cursor: pointer;
            transform: scale(1.01);
        }}
`

export const MainBanner = styled.div`
position: relative;

    img {
    width: 100%;
    height: 700px;
    object-fit: cover;
}

    .slick-dots {
    bottom: 10px!important;
}

    .slick-next {
    right: 0px;
    width: 80px!important;
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
        font-size: 3rem!important;
    }
}

@media (max-width: 425px) {
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
z-index: 1;
`