import styled from 'styled-components'
import { colors } from '../../styles.ts'

export const CommentsContainer = styled.div`
    width: 100%;
    background: white;
    padding: 1.5rem 0;
`
export const CommentsSubContainer = styled.div`
    max-width: 850px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ( width < 920px ) {
        max-width: 770px;
        margin: auto;
        justify-content: center;
        gap: 1rem;
    }

    @media ( width < 790px ) {
        width: 610px;
    }

    @media ( width < 630px ) {
        width: auto;
        height: auto;
        flex-direction: column;
        text-align: center;
    }
`

export const CommentsFiveStars = styled.div`
`

export const StarsText = styled.div`
    font-size: 1.8rem;
    line-height: 2rem;
    margin: auto;
    font-weight: 500;
    color: ${colors.grey};

    .strong {
        font-weight: 700;
    }
`

export const StarsSubText = styled.div`
    font-size: 1rem;
    font-weight: bold;
    padding-top: 0.5rem;
    color: ${colors.grey};
`

export const StarsContainer = styled.div`
    padding-top: 1rem;
    font-size: 2.5rem;
    color: ${colors.gold};
`
export const CommentsUsers = styled.div`
    cursor: grab;
    padding: 1rem 0;
    text-align: center;
    box-shadow: 1px 1px 10px ${colors.gold};
    border-radius: 1rem;
    background-color: white;
    width: auto;
    
    img{
        width: 6rem;
        height: 6rem;
        margin: auto;
        padding-top: 1rem;
    }

    @media ( width < 785px ) {
        width: 350px !important;
    }

    @media ( width < 380px ) {
        width: 300px !important;
        height: 340px;
    }
`

export const UsersCard = styled.div`
`

export const UserName = styled.div`
    font-weight: bold;
`

export const UserComment = styled.div`
    padding-top: 1rem;
    padding-top: 1rem;
    width: 80%;
    margin: auto;

    @media ( width < 380px ) {
        width: 60%;
    }
`

export const Autoplay = styled.div`
    width: 510px;
    height: 250px;

    @media ( width < 790px ) {
        width: 350px !important;
        height: 270px;
    }

    @media ( width < 380px ) {
        width: 300px !important;

        .slick-slide {
            width: 300px !important;
        }
    }
`
