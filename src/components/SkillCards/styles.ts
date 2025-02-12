import styled from "styled-components";
import { colors } from "../../styles.ts";

export const Skillcards = styled.div`
  background: rgb(202, 168, 88);
  background: linear-gradient(
    180deg,
    rgba(202, 168, 88, 1) 0%,
    rgba(35, 31, 32, 1) 1.8%,
    rgba(35, 31, 32, 1) 98.2%
  );
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CardsContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 0rem;
  justify-content: center;
  width: 900px;
  z-index: 1;
`;

export const CardSubcontainer = styled.div`
  justify-content: center;
`;

export const Cards = styled.div`
  z-index: 1;
  display: flex;
  justify-self: start;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 1px 1px 8px ${colors.gold};
  margin: 1rem 0 0 1rem;
  height: 220px;
  width: 685px;

  &.CardEven {
    margin: 1rem 1rem 0 0;
    justify-self: end;
  }

  @media (width < 780px) {
    width: 90%;
    height: auto;
    justify-self: center;
    margin: 1rem;

    &.CardEven {
      justify-self: center;
      margin: 1rem;
    }
  }

  @media (width < 570px) {
    flex-direction: column;
    text-align: center;

    &.CardEven {
      flex-direction: column-reverse;

    .CardImgClassTwo {
        margin-top: 1rem;
    }
    .CardImgClassFour {
        margin-top: 1rem;
    }
  }
`;

export const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .CardImgClassOne {
    margin-left: 1rem;
    width: 200px;
    height: 270px;

    @media (width < 630px) {
      width: 200px;
      height: 180px;
    }
  }
  .CardImgClassTwo {
    margin-right: 1rem;
    width: 180px;
    height: 200px;

    @media (width < 630px) {
      width: 200px;
      height: 180px;
    }
  }
  .CardImgClassThree {
    margin-left: 1rem;
    width: 200px;
    height: 270px;

    @media (width < 630px) {
      width: 200px;
      height: 180px;
    }
  }
  .CardImgClassFour {
    margin-left: 1rem;
    width: 200px;
    height: 270px;

    @media (width < 630px) {
      width: 200px;
      height: 180px;
    }
  }
`;

export const CardSubcontainerTitle = styled.h4`
  color: ${colors.gold};
  font-weight: 700;
  font-size: 20px;
  padding: 1rem 0 0 1rem;
  margin: 0.5rem 0 0 0;
  z-index: 1;

  @media (width < 780px) {
    font-size: 1.2rem;
    width: 90%;
  }
`;

export const CardSubcontainerDescription = styled.p`
  color: black;
  font-weight: 500;
  font-size: 16px;
  padding-left: 1rem;
  z-index: 1;
  width: 430px;
  margin: 0.4rem 0 0 0;

  @media (width < 780px) {
    font-size: 1rem;
    width: 90%;
    padding-bottom: 1rem;
  }
`;

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

  @media (width < 780px) {
    width: 95%;
    height: 80%;
  }
  @media (width < 550px) {
    height: 85%;
  }
  @media (width < 480px) {
    height: 88%;
  }
`;
