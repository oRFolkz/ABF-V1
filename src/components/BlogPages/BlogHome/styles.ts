import styled from "styled-components";
import { colors } from "../../../styles.ts";

import logo from "../../assets/imgs/logos/logotipo.png";

export const BlogContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: relative;
`;

export const LogoBackground = styled.div`
  position: absolute;
  top: 50%;
  left: -25px;
  transform: translate(0%, -50%);
  width: 200px;
  height: 350px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.2;
`;

export const BlogSubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 1rem 0;
  overflow: hidden;
`;

export const BlogMainCard = styled.div`
  width: 500px;
  height: 300px;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 10px;
  color: white;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-end;

  background-size: cover;

  transition: all 0.1s ease;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: 0px 0px 5px 1px ${colors.grey};
  }

  @media (width < 1100px) {
    width: 440px;
  }

  @media (width < 990px) {
    width: 400px;
  }

  @media (width < 900px) {
    width: 85%;
    height: 250px;
  }
`;

export const AutorMainCard = styled.div`
  position: absolute;

  display: flex;
  top: 20px;
  left: 30px;

  p {
    margin: 1rem 1rem 1rem 0.5rem;
    color: rgb(255, 255, 255);
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  }

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: fill;
  }

  @media (width < 380px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

export const AutorSubCard = styled.div`
  position: absolute;

  display: flex;
  top: 20px;
  left: 30px;

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: fill;
  }
`;

export const BlogTittle = styled.div`
  z-index: 2;
  margin: 0 1rem 0 1rem;

  @media (width < 650px) {
    font-size: 0.8rem;
  }
  @media (width < 490px) {
    margin: 0 0 0 1rem;
  }
  @media (width < 380px) {
    h2 {
      margin: 0;
    }
  }
`;

export const BlogText = styled.div`
  z-index: 2;
  margin: 0 1rem 0 1rem;

  @media (width < 650px) {
    font-size: 0.9rem;
  }

  @media (width < 490px) {
    font-size: 0.8rem;
  }
`;

export const FadeBackground = styled.div`
  z-index: 1;
  background: ${colors.grey};
  background: linear-gradient(
    180deg,
    rgba(35, 31, 32, 0.07) 0%,
    #231f20 100%,
    #231f20 0%
  );

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const BlogSubCard = styled.div`
  width: 250px;
  height: 432px;
  margin: 1rem 1rem 0 0;
  border-radius: 10px;
  color: white;
  background: ${colors.grey};
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 0px 0px 10px 1px ${colors.grey};
  }

  position: relative;
`;

export const BlogSubImg = styled.div`
  img {
    border-radius: 10px;
    height: 220px;
    width: 250px;
    object-fit: fill;
  }
`;

export const BlogSubTittle = styled.div`
  padding: 0 1rem 0rem 1rem;
`;

export const BlogSubTxt = styled.div`
  padding: 0 1rem 0rem 1rem;
`;
