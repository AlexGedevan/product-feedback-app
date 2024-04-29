import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

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
  }
`;
