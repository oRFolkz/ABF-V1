import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  gold: "#CAA858",
  grey: "#231F20",
};

export const GlobalCss = createGlobalStyle`

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  a {
    text-decoration: none;
  }

  body {
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
    margin: 0;
    padding: 0;

      input::placeholder {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
      }
          
      textarea::placeholder {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
      }
    }
`;

export const InstagramColor = styled.i`
  color: transparent;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background: -webkit-radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background-clip: text;
  -webkit-background-clip: text;

  &:hover {
    transform: scale(1.3);
  }
`;

export const WhatsAppColor = styled.i`
  color: rgba(37 211 102) !important;

  &:hover {
    transform: scale(1.3);
  }
`;

export const FacebookColor = styled.i`
  color: rgb(53, 104, 207) !important;

  &:hover {
    transform: scale(1.3);
  }
`;
