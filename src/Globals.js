import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

   

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Jost", sans-serif;
    background-color: #F7F8FD;
    display: flex;
    justify-content: center;
    /* padding-top: 3rem;
    padding-bottom: 3rem; */

    @media screen and (min-width: 768px) {
      padding-top: 5.6rem;
      padding-bottom: 11.3rem;
    }
  }
  a{
    text-decoration: none;
  }
`;
