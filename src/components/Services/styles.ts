import styled from "styled-components";
import { colors } from "../../styles.ts";

export const ServicesBackground = styled.div`
  background: rgb(202, 168, 88);
  background: linear-gradient(
    180deg,
    rgba(202, 168, 88, 1) 0%,
    rgba(35, 31, 32, 1) 1%,
    rgba(35, 31, 32, 1) 99%,
    rgba(202, 168, 88, 1) 100%
  );
  display: flex;
  justify-content: start;
  margin-top: 680px;
  padding: 2rem 0;
`;

export const ServicesContainer = styled.div`
  color: ${colors.grey};
  text-align: center;
  justify-content: center;
  display: flex;
  margin: auto;
  width: 1600px;
  overflow-y: hidden;
  gap: 10px;

  @media (width < 1360px) {
    padding-left: 5rem;
    padding-right: 1rem;
  }

  @media (width < 1300px) {
    padding-left: 10rem;
  }
  @media (width < 1220px) {
    padding-left: 15rem;
  }
  @media (width < 1135px) {
    padding-left: 20rem;
  }
  @media (width < 1060px) {
    padding-left: 25rem;
  }
  @media (width < 970px) {
    padding-left: 30rem;
  }
  @media (width < 890px) {
    padding-left: 35rem;
  }
  @media (width < 810px) {
    padding-left: 40rem;
  }
  @media (width < 740px) {
    flex-wrap: wrap;
    padding-left: 0rem;
    padding-right: 0rem;
  }
`;

export const ServiceImg = styled.div`
  img {
    border-radius: 8px 8px 5rem 0;
    width: 250px;
    height: 320px;
    object-fit: cover;
    object-position: 0% 0%;

    @media (width < 740px) {
        object-fit: fill;
      width: 100%;
          height: 360px;
  }
`;

export const ClickAnimation = styled.div`
  position: absolute;
  top: 350px;
  right: 20px;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const ServiceIcon = styled.div`
  margin-top: 1rem;

  @media (width < 640px) {
    margin: 1rem 0 0 0;
  }
`;

export const ServiceCardTitle = styled.div`
  h2 {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0.3rem 0 1rem 0;
  }
`;

export const ServiceCardText = styled.div`
  p {
    margin: 0.5rem 0.5rem 1.5rem 0.5rem;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const BtnMore = styled.div`
  cursor: pointer;
  border: none;
  color: ${colors.grey};
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: underline;
  background-color: transparent;
  margin-bottom: 1rem;

  @media (width < 640px) {
    margin-bottom: 0.5rem;
  }
`;

export const ActiveText = styled.div`
  display: none;

  a {
    color: ${colors.grey};
    text-align: center;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const SkillsCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  animation: opacityShow 1s ease;

  @keyframes opacityShow {
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

  h4 {
    margin: 1rem 0.5rem 0.5rem 0.5rem;
    font-size: 1rem;
  }

  i {
    font-size: 1.2rem;
    color: ${colors.gold};
  }

  @media (width < 580px) {
    h4 {
      width: 100px;
      margin: 10px;
    }
  }

  @media (width < 520px) {
    i {
      font-size: 1rem;
    }
    h4 {
      font-size: 0.8rem;
      margin: 5px;
    }
  }

  @media (width < 440px) {
    i {
      font-size: 0.6rem;
    }
    h4 {
      margin: 5px;
      width: 70px;
      font-size: 0.8rem;
    }
  }

  @media (width < 390px) {
    i {
      font-size: 0.5rem;
    }
    h4 {
      margin: 5px;
      width: 60px;
      font-size: 0.5rem;
    }
  }
`;

export const ActiveEntreEmContato = styled.div`
  width: 170px;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;

  background: rgb(202, 168, 88);
  background: radial-gradient(
    circle,
    rgba(202, 168, 88, 1) 0%,
    rgba(202, 168, 88, 0.4990371148459384) 60%,
    rgba(202, 168, 88, 1) 100%
  );
  box-shadow: 2px 2px 10px 0px ${colors.gold};
  border-radius: 1rem;

  animation: opacityShow 0.5s ease;

  @keyframes opacityShow {
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

  transition: all 0.1s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (width < 520px) {
    padding: 0.5rem;
    margin: 0.2rem auto 0 auto;
    font-size: 0.8rem;
  }

  @media (width < 400px) {
    padding: 0.5rem 0.2rem;
    margin: 0.2rem auto 0 auto;
    font-size: 0.7rem;
  }

  @media (width < 390px) {
    width: 120px;
    padding: 0.4rem 0rem;
    margin: 0.2rem auto 0 auto;
    font-size: 0.6rem;
  }
`;

export const VideoCard = styled.div`
  video {
    border-radius: 8px 0 5rem 8px;
    width: 300px;
    height: 530px;

    @media (width < 580px) {
      width: 225px;
      height: 400px;
    }

    @media (width < 520px) {
      width: 148px;
      height: 260px;
    }
    @media (width < 390px) {
      width: 120px;
      height: 212px;
    }
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
`;

export const ServicesCard = styled.div`
  cursor: pointer;
  position: relative;
  background-color: white;
  border: 2px solid ${colors.gold};
  border-radius: 10px;
  width: 250px;
  height: 530px;

  transition: all 0.3s ease;

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
    width: 560px;
    height: 530px;
    text-align: start;

    &:hover {
      transform: scale(1);
    }

    @media (width < 580px) {
      width: 500px;
      height: 400px;
    }

    @media (width < 520px) {
      width: 90%;
      height: 260px;
    }

    @media (width < 390px) {
      height: 212px;
    }

    ${ActiveText} {
      display: block;
      width: 400px;

      padding: 0 1rem;
      font-weight: 500;

      h1 {
        font-size: 1.1rem;
        width: 100%;
      }
      p {
        font-size: 1rem;
        width: 100%;
      }

      @media (width < 520px) {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.9rem;
          margin: 0;
        }
      }
      @media (width < 440px) {
        padding: 0 0.5rem;
        h1 {
          font-size: 0.9rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
      @media (width < 400px) {
        h1 {
          font-size: 0.8rem;
        }
        p {
          font-size: 0.7rem;
        }
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
`;
