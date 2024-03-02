import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
  }

  h1 {
    font-size: 4rem;
  }

  body {
    background: var(--background);
  }

  button {
    cursor: pointer;
  }

  :root {
    --white: #FFFFFF;
    --black: #000000;
    --background: #e4e9ed;
  }
`;

export { GlobalStyles };
