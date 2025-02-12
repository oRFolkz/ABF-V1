import styled from "styled-components";
import { colors } from "../../../styles.ts";

export const BlogInstaLink = styled.a`
  text-decoration: none;
  transition: all 0.1s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

export const BlogInstaContainer = styled.div`
  background: rgb(0, 0, 0, 0.08);
  border: 3px solid ${colors.gold};
  max-width: 1000px;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;

  position: relative;

  @media (width <625px) {
    width: 250px;
  }
`;

export const BlogInstaCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  @media (width <625px) {
    height: 100px;
  }
`;

export const BlogInstaTittle = styled.div`
  color: ${colors.grey};
  font-weight: bold;
  font-size: 1.5rem;
  width: 50%;

  h3 {
    margin: 0.5rem 0 0 0;
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

  @media (width < 900px) {
    font-size: 1rem;

    i {
      font-size: 3rem;
    }
  }

  @media (width < 625px) {
    font-size: 1rem;
    width: 100%;
    text-align: center;

    i {
      font-size: 2rem;
    }
  }
`;

export const BlogInstaImg = styled.div`
  display: flex;
  gap: 10px;
  width: 70%;
  height: 250px;

  img {
    border: 3px solid ${colors.gold};
    border-radius: 10px;
    width: 32%;
    height: 100%;
  }

  @media (width < 900px) {
    img {
      width: 48%;
    }

    img:nth-child(1) {
      display: none;
    }
  }

  @media (width < 625px) {
    display: none;
  }
`;

export const ClickAnimation = styled.div`
  display: none;

  @media (width < 620px) {
    display: flex;
    position: absolute;
    top: 30px;
    right: 50px;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;
