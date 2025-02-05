import styled from 'styled-components'
import { colors } from '../../styles.ts'

export const ServicesBackground = styled.div`
    background: rgb(202,168,88);
    background: linear-gradient(180deg, rgba(202,168,88,1) 0%, rgba(35,31,32,1) 1%, rgba(35,31,32,1) 99%, rgba(202,168,88,1) 100%);
    display: flex;
    justify-content: center;
    margin-top: 680px;
    padding: 2rem 0;
`

export const ServicesContainer = styled.div`
    color: ${colors.grey};
    text-align: center;
    justify-content: center;
    display: flex;
    gap: 25px;
    width: 900px;
`

export const ServiceImg = styled.div`
    img {
        border-radius: 8px 8px 5rem 0;
        width: 220px;
        height: 400px;
    }
`

export const ClickAnimation = styled.div`
    position: absolute;
    top: 420px;
    right: 10px;
    img {	
        width: 20px;
        height: 20px;
    }  
`


export const ServiceIcon = styled.div`
    margin-top: 1rem;

    @media ( width < 640px ) {
        margin: 1rem 0 0 0;
    }
`

export const ServiceCardTitle = styled.div`
    h2 {
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0.3rem 0 1rem 0;

        @media ( width < 820px ) {
            font-size: 1rem;
            margin: 0 0 0.5rem 0;
        }

        @media ( width < 640px ) {
            margin: 0.5rem 0;
        }
    }
`

export const ServiceCardText = styled.div`
    p {
        margin: 0.5rem 0.5rem 1.5rem 0.5rem;
        font-size: 1rem;
        font-weight: 500;

        @media ( width < 820px ) {
            font-size: 15px;
            margin: 0 0.3rem 0.5rem 0.3rem;
        }

        @media ( width < 720px ) {
            font-size: 13px;
        }

        @media ( width < 640px ) {
            font-size: 12px;
        }
    }
`

export const BtnMore = styled.div`
    cursor: pointer;
    border: none;
    color: ${colors.grey};
    font-size: .9rem;
    font-weight: bold;
    text-decoration: underline;
    background-color: transparent;
    margin-bottom: 1rem;

    @media ( width < 640px ) {
        margin-bottom: 0.5rem;
    }
`

export const ActiveText = styled.div`
    display: none;
    width: 0px;
`

export const SkillsCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    animation: opacityShow 1s ease;

    @keyframes opacityShow {
        0% { opacity: 0; }
        20% { opacity: 0; }
        60% { opacity: .6; }
        100% { opacity: 1; }
    }

    h4 {
        margin: 1rem;
        font-size: 1.2rem;
    }

    i {
        font-size: 1.5rem;
        color: ${colors.gold};
    }
`

export const ActiveEntreEmContato = styled.div`
    width: 170px;
    margin: auto;
    margin-top: 1rem;
    padding: 1rem .2rem 1rem .5rem;

    background: rgb(202,168,88);
    background: radial-gradient(circle, rgba(202,168,88,1) 0%, rgba(202,168,88,0.4990371148459384) 60%, rgba(202,168,88,1) 100%);
    box-shadow: 2px 2px 10px 0px ${colors.gold};
    border-radius: 1rem;

    animation: opacityShow .5s ease;

    @keyframes opacityShow {
        0% { opacity: 0; }
        20% { opacity: 0; }
        60% { opacity: .6; }
        100% { opacity: 1; }
    }

    transition: all 0.5s ease;

    a {
        margin: auto;
        padding: .2rem .2rem .2rem .5rem;
        text-align: center;
        font-weight: bold;
        text-decoration: none;
        color: ${colors.grey};
    }
    &:hover {
        transform: scale(1.1);
    }
`

export const VideoCard = styled.div`
        video {
            border-radius: 8px 0 5rem 8px;
            width: 366px;
            height: 650px;
        }

        video::-webkit-media-controls {
        display: none;
        }

        video::-moz-media-controls {
        display: none;
        }

        video::-ms-media-controls {
        display: none;
        }
`

export const ServicesCard = styled.div`
    cursor: pointer;
    position: relative;
    background-color: white;
    border: 2px solid ${colors.gold};
    border-radius: 10px;
    transition: all .5s ease;
    width: 220px;
    height: 650px;

    &:hover {
        transform: scale(1.04);
        box-shadow: 2px 0 10px ${colors.gold};
    }

    .hide {
        display: none;
    }
    
    &.active {
        cursor: default;
        display: flex;
        width: 1200px;
        text-align: start;

        &:hover {
            transform: scale(1);
        }

        
        ${ActiveText} {
            display: block;
            width: 400px;

            padding: 0 1rem;
            font-weight: 500;

            h1 {
                font-size: 1.8rem;
            }
            p {
                width: 95%;
            }
        }

        ${ClickAnimation} {
            display: none;
        }
        ${ServiceIcon} {
            display: none;
        }
        ${ServiceCardTitle} {
            display: none;
        }
        ${ServiceCardText} {
            display: none;
        }
        ${BtnMore} {
            display: none;
        }
    }
`
