import styled from "styled-components";
import { colors } from "../../styles.ts";

export const CircleContainer = styled.div`
  position: relative;
  cursor: pointer;
  position: fixed;
  z-index: 999;
  bottom: 150px;
  left: -8px;
  padding-left: 1rem;
  height: 0px;
`;

export const GoldenLine = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 59%;
  transform: translate(0%, 0%);
  width: 2px;
  height: 200px;
  background-color: ${colors.gold};
`;

export const CircleContainerUP = styled.div`
  cursor: pointer;
  position: fixed;
  z-index: 999;
  bottom: 75px;
  right: 10px;
  padding-left: 1rem;
  height: 0px;
  display: none;

  &.active {
    display: block;
    animation: opacityUP 1s ease;

    @keyframes opacityUP {
      0% {
        opacity: 0;
      }
      20% {
        opacity: 0;
      }
      60% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;

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

  @media (width > 560px) {
    width: 220px;
  }
`;
export const Bubble = styled.div`
  width: 180px;
`;

export const BubbleText = styled.div`
  color: #fff;
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 50%;
  transition: all 0.3s;
  background-color: #4dc247;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 0.5rem;
  border: 2px solid ${colors.gold};
  transition: transform 0.3s ease;

  &:hover {
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
`;

export const BubbleTextInsta = styled.div`
  color: #fff;
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 50%;
  transition: all 0.3s;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: 2px solid ${colors.gold};
  transition: transform 0.3s ease;

  &:hover {
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
`;

export const BubbleTextUP = styled.div`
  color: #fff;
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 50%;
  transition: all 0.3s;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: 2px solid ${colors.gold};
  transition: all 1s ease;

  &:hover {
    transform: scale(1.05);
  }

  i {
    color: ${colors.grey};
    font-size: 2rem;
    height: 35px;
    transform: scale(1.05) !important;
  }
`;
