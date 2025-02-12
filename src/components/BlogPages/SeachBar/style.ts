import styled from "styled-components";
import { colors } from "../../../styles.ts";

export const SearchBarBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchDiv = styled.div`
  display: flex;
  width: 800px;
  padding: 0.4rem;
  border: 2px solid ${colors.grey};
  border-radius: 10px;

  @media (width < 870px) {
    width: 450px;
  }

  @media (width < 500px) {
    width: 300px;
  }

  @media (width < 426px) {
    width: 250px;

    input::placeholder {
      font-size: 1rem;
    }
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    font-weight: bold;
    font-size: 1rem;
    margin: 0.2rem;

    &:focus {
      border: none;
      outline: none;
    }
  }
`;

export const SearchBarCard = styled.div`
  display: flex;
  margin: 1rem 0 0 0;
  justify-content: center;
`;

export const SearchIcons = styled.div`
  display: flex;
  gap: 5px;

  i {
    color: white;
    font-size: 1rem;
  }

  button {
    background-color: ${colors.grey};
    border-radius: 10px;
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
  }
`;

export const SearchTxt = styled.div`
  text-align: center;
  p {
    margin: 1rem auto 0 auto;
    font-size: 1.5rem;
  }

  @media (width < 426px) {
    p {
      font-size: 1rem;
    }
  }
`;
