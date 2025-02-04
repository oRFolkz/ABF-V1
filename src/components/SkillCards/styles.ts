import styled from 'styled-components'
import { colors } from '../../styles.ts'

export const Skillcards = styled.div`
    background: rgb(202,168,88);
    background: linear-gradient(180deg, rgba(202,168,88,1) 0%, rgba(35,31,32,1) 1.8%, rgba(35,31,32,1) 98.2%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const CardsContainer = styled.div`
    margin: 0 auto;
    margin-bottom: 0rem;
    justify-content: center;
    width: 900px;
    z-index: 1;
`

export const CardSubcontainer = styled.div`
    height: 100%;
    justify-content: center;

    @media ( width < 680px ) {
        align-items: center;
        text-align: center;
    }
    
    @media ( width < 680px ) {
        order: 1;
    }
`

export const Cards = styled.div`
    z-index: 1;
    display: flex;
    justify-self: start;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 1px 1px 8px ${colors.gold};
    margin: 1rem 0 0 0;
    height: 220px;
    width: 685px;

    &.CardEven {
        justify-self: end;
    }

    @media ( width < 863px ) {
        height: auto;
    }

    @media ( width < 680px ) {
        flex-direction: column;
        gap: 0;
        width: 360px !important;
        height: auto !important;
        padding: 1rem 0;
    }

    @media ( width < 390px ) {
        width: 80% !important;
    }
`

export const Img = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .CardImgClassOne {
        margin-left: 1rem;
        width: 200px;
        height: 270px;
    }
    .CardImgClassTwo {
        margin-right: 1rem;
        width: 180px;
        height: 200px;
    }
    .CardImgClassThree {
        margin-left: 1rem;
        width: 200px;
        height: 270px;
    }
    .CardImgClassFour {
        margin-left: 1rem;
        width: 200px;
        height: 270px;
    }
`

export const CardSubcontainerTitle = styled.h4`
    color: ${colors.gold};
    font-weight: 700;
    font-size: 20px;
    padding: 1rem 0 0 1rem;
    margin: .5rem 0 0 0;
    z-index: 1;

    @media ( width < 863px ) {
        padding: 1rem 0 0 0;
    }

    @media ( width < 680px ) {
        padding-left: 0rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    @media (width < 560px ) {
        width: 250px;
        padding: 0.5rem 0 0 0;
    }
`

export const CardSubcontainerDescription = styled.p`
    color: black;
    font-weight: 500;
    font-size: 16px;
    padding-left: 1rem;
    z-index: 1;
    width: 430px;
    margin: .4rem 0 0 0;

    @media ( width < 863px ) {
        padding: 1rem 0 0 0;
    }

    @media ( width < 680px ) {
        height: auto;
        padding-left: 0rem;
        padding-top: 0rem;
        font-weight: 400;
    }
`

export const BackgroundBlock = styled.div`
    z-index: 0;
    background-color: transparent;
    position: absolute;
    top: 108px;
    left: 50%;
    transform: translateX(-50%);
    width: 720px;
    height: 750px;
    border: 2px solid ${colors.gold};
    border-radius: 1rem;
`