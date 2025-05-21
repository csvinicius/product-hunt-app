import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: #f9f9f9;
  }

  button {
    cursor: pointer;
    background-color: #fff;
    padding: 8px 48px;
    border: none;
    min-width: 50%;
    
    &.active {
      border-bottom: 2px solid #da572d;
      color: #da572d;
    }

    @media (min-width: 768px) {
      min-width: auto;
    }
  }
`;