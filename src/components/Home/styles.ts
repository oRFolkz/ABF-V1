import styled from "styled-components"
import { colors } from '../../styles.ts'

export const ShowLinksMobile = styled.div`
    display: none;

    @media ( width < 755px ) {
        font-size: 40px;
        color: ${colors.gold};
        display: flex;
        position: absolute;
        top: 30px;
        right: 60px;
    }
`

export const Header = styled.div`
    border-bottom: 1px solid ${colors.gold};
    background: linear-gradient(hsl(345, 6%, 13%,0.8) 95%, ${colors.gold} 100%);
    position: fixed;
    margin: auto;
    width: 100vw;
    top: 0;
    z-index: 100;
`

export const HeaderContainer  = styled.div`
    height: 100px;
    max-width: 950px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;

    img{
        cursor: pointer;
        width: 150px;
        height: 90px;
    }

    @media ( width < 920px ) {
    justify-content: center;
        gap: 0;
    }

    @media ( width < 960px ) {
        margin: 0 1rem;
    }

    @media ( width < 755px ) {
        position: relative;
        margin: 0;
    }
`
export const HeaderLogo  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media ( width < 960px ) {
        margin-right: 1rem;
    }

    @media ( width < 755px ) {
        position: absolute;
        top: 5px;
        left: 60px;
    }
`

export const Links = styled.a`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media ( width < 960px ) {
        height: 30px;
        margin-bottom: 3.2rem;
        margin-right: 1rem;
        width: 300px;
    }

    @media ( width < 755px ) {
        display:none;
    }
`

export const BlogHover = styled.a`
    cursor: pointer;

    @media ( width < 960px ) {
        height: 30px;
        margin-right: 1rem;
    }
`

export const ServicosHover = styled.div`
    cursor: pointer;

    @media ( width < 960px ) {
        height: 30px;
    }
`

export const QuemSomosHover = styled.div`
    cursor: pointer;

    @media ( width < 960px ) {
        height: 20px;
    }
`

export const LocalizacaoHover = styled.div`
    cursor: pointer;

    @media ( width < 960px ) {
        height: 20px;
    }
`

export const Icons = styled.p`
    font-weight: 600;
    text-decoration: none;
    color: ${colors.gold};
    margin-right: 10px;
    padding: 5px;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;

    &:hover{
        cursor: pointer;
        border-radius: 0.5rem !important;
        border-bottom: 2px solid ${colors.gold} !important; 
    }

    i {
        margin-right: 5px;
    }

    @media ( width < 960px ) {
        height: 10px;
        padding: 0px;
    }
` 

export const UlPadding = styled.ul`
    color: green;
`

export const QuemSomosHoverOptions = styled.div`
    color: green;
`

export const PeticoesButton = styled.div`
    align-self: center;
    background-color: transparent;
    border: 2px solid ${colors.gold};
    border-radius: 0.5rem 0.5rem 2rem 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.3s ease;

    p {
        margin: 5px 18px 5px 10px;
        font-weight: 600;
        text-decoration: none;
        color: ${colors.gold};
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease;

        i {
            margin-right: 5px;
        }

        &:hover {
            color: ${colors.grey};
        }
    }

    &:hover {
        cursor: pointer;
        background-color: white;
        transform: scale(1.05);
    }

    i {
        font-size: 1.2rem;
    }

    @media ( width < 710px ) {
        display: none;
    }

    @media ( width < 960px ) {
        margin-right: 1rem;
    }


    @media ( width < 755px ) {
        display:none;
    }
`

export const IconsHeader = styled.div`
    display: flex;
    gap: 1rem;
    margin-left: 1.2rem;
    font-size: 1.55rem;
    align-self: center;

    i {
        font-size: 1.8rem;
        cursor: pointer;
        transition: transform 0.3s ease;           
    }

    @media ( width < 960px ) {
        margin-left: 0;
    }

    @media ( width < 755px ) {
        display:none;
    }
`

export const iconsHeader = styled.div`
    display: flex;
    gap: 1rem;
    margin-left: 0.8rem;
    font-size: 1.55rem;
    align-self: center;

    i {
        font-size: 1.8rem;
        cursor: pointer;
        transition: transform 0.3s ease;
    }
`