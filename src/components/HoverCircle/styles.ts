import styled from 'styled-components'
import { colors } from '../../styles.ts'

export const CircleContainer = styled.div`
    cursor: pointer;
    position: fixed;
    z-index: 999;
    bottom: 150px;
    left: 0px;
    padding-left: 1rem;
    height: 0px;
`
export const Link = styled.a`
    text-decoration: none;
`

export const HoverImg = styled.div`
    border: 1px solid ${colors.gold};
    border-left: 0px solid ${colors.gold};
    background-color: ${colors.grey};
    border-radius: 1rem 3rem 0rem 0;
    width: 280px;
    height: 100px;
    display: flex;
    align-items: center;
    
    img {
        border: 1px solid ${colors.gold};
        background-color: white;
        border-radius: 0 1rem 0 0;
        width: 110px;
        height: 130px;
    }

    @media ( width > 560px ) {
        width: 220px;
    }
`
export const Bubble = styled.div`
    width: 180px;
`

export const BubbleText = styled.div`
    color: #fff;
    width: 50px;
    height: 50px;
    padding: 5px;
    border-radius: 50%;
    transition: all .3s;
    background-color: #4dc247;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 0.5rem;
    border: 2px solid ${colors.gold};
    transition: transform 0.3s ease;

    &:hover{
        transform: scale(1.05);
    }

    i {
        font-size: 2rem;
        height: 35px;
    }

    p {
        color: ${colors.gold};
        margin: 0;
        width: auto;
        font-size: 1rem;
        font-weight: 600;
    }
`

export const BubbleTextInsta = styled.div`
    color: #fff;
    width: 50px;
    height: 50px;
    padding: 5px;
    border-radius: 50%;
    transition: all .3s;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: 2px solid ${colors.gold};
    transition: transform 0.3s ease;

    &:hover{
        transform: scale(1.05);
    }

    i {
        font-size: 2rem;
        height: 35px;
        transform: scale(1.05) !important;
    }

    p {
        color: ${colors.gold};
        margin: 0;
        width: auto;
        font-size: 1rem;
        font-weight: 600;
    }
`