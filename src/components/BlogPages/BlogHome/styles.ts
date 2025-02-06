import styled from "styled-components";
import { colors } from '../../../styles.ts'

import henriqueImg from '../../assets/imgs/pexels.jpg'

export const BlogContainer = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .1);

    a {
        text-decoration: none;
        transition: all 1s ease;

        &:hover {
            transform: scale(1.01);
        }
    }
`

export const BlogSubContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const BlogMainCard = styled.div`
    width: 500px;
    height: 400px;
    margin: 1rem;
    padding: 1rem;
    border-radius: 10px;
    color: white;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-end;


    background-image: url(${henriqueImg});
    background-size: cover;

    transition: all .5s ease;

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
        box-shadow: 0px 0px 10px 1px ${colors.grey};
    }
`

export const BlogTittle = styled.div`
    z-index: 2;
    margin: 0 1rem 0 1rem;
`

export const BlogText = styled.div`
    z-index: 2;
    margin: 0 1rem 0 1rem;
`

export const FadeBackground = styled.div`
    z-index: 1;
    background: ${colors.grey};
    background: linear-gradient(180deg,rgba(35, 31, 32, 0.07) 0%, #231F20 100%, #231F20 0%);

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
`

export const BlogSubCard = styled.div`
    width: 250px;
    height: 432px;
    margin: 1rem 1rem 0 0;
    border-radius: 10px;
    color: white;
    background: ${colors.grey};
    transition: all .5s ease;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
        box-shadow: 0px 0px 10px 1px ${colors.grey};
    }

    position: relative;
`

export const BlogSubImg = styled.div`
    img {
        border-radius: 10px;
        height: 250px;
        width: 250px;
        object-fit: fill;
    }
`

export const BlogSubTittle = styled.div`
    padding: 0 1rem 0rem 1rem;
`

export const BlogSubTxt = styled.div`
    padding: 0 1rem 0rem 1rem;
`
export const BlogInstaContainer = styled.div`
    background: white;
    border: 3px solid ${colors.gold};
    width: 1000px;
    height: 200px;
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
`
export const BlogInstaCard = styled.div`
    display: flex;
`
export const BlogInstaTittle = styled.div`
    color: ${colors.grey};
    font-weight: bold;
    font-size: 1.5rem;
    padding-left: 1rem;
    width: 30%;
    height: 200px;

    h3 {
        margin: .5rem 0 0 0;
        padding: 0;
    }

    i {
        color: ${colors.gold};
        font-size: 4rem;
        padding: 0;
        margin: 0;
    }
    span {
        font-weight: bold;
        color: ${colors.gold};
    }
`
export const BlogInstaImg = styled.div`
    width: 70%;
    height: 200px;

    img {
        border-radius: 1rem;
        height: 100%;
        width: 100%;
    }
`