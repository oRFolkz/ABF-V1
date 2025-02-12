import styled from "styled-components";
import { colors } from "../../styles.ts";
import { Link } from "react-router-dom";

export const ShowLinksMobile = styled.div`
  display: none;

  @media (width < 570px) {
    font-size: 40px;
    color: ${colors.gold};
    display: flex;
    position: absolute;
    top: 30px;
    right: 60px;
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid ${colors.gold};
  background: linear-gradient(hsl(345, 6%, 13%, 0.8) 95%, ${colors.gold} 100%);
  position: fixed;
  margin: auto;
  width: 100vw;
  top: 0;
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  height: 100px;
  max-width: 950px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;

  img {
    cursor: pointer;
    width: 150px;
    height: 90px;
  }

  @media (width < 960px) {
    margin: 0 1rem;
  }
`;
export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Links = styled.a`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

export const Blog = styled.a`
  cursor: pointer;

  @media (width < 570px) {
    display: none;
  }
`;

export const Comentarios = styled.div`
  cursor: pointer;

  @media (width < 960px) {
    display: none;
  }
`;

export const QuemSomos = styled.div`
  cursor: pointer;

  @media (width < 810px) {
    display: none;
  }
`;

export const Localizacao = styled.div`
  cursor: pointer;

  @media (width < 700px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: ${colors.gold};
  margin-right: 10px;
  padding: 5px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
`;

export const Icons = styled.p`
  font-weight: 600;
  text-decoration: none;
  color: ${colors.gold};
  margin-right: 10px;
  padding: 5px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    border-radius: 0.5rem !important;
    border-bottom: 2px solid ${colors.gold} !important;
  }

  i {
    margin-right: 5px;
  }
`;

export const UlPadding = styled.ul`
  color: green;
`;

export const QuemSomosHoverOptions = styled.div`
  color: green;
`;

export const FormularioButton = styled.div`
  user-select: none;
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
  }

  &:hover {
    cursor: pointer;
    background-color: white;
    transform: scale(1.05);
  }

  i {
    font-size: 1.2rem;
  }

  @media (width < 570px) {
    display: none;
  }
`;

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

  @media (width < 570px) {
    display: none;
  }
`;

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
`;
