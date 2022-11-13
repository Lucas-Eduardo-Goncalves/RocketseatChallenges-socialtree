import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --unic-color: #BB99DD;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  *, button {
    font-family: 'Poppins', sans-serif;
    color: var(--unic-color);
  }

  .instagram {
    text-align: center;
    font-weight: 300;
    margin-bottom: 33px;
  }
`;
