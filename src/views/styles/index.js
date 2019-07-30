import { createGlobalStyle } from 'styled-components';
import { SolaimanLipi } from './font-faces';

const GlobalStyle = createGlobalStyle`
  ${SolaimanLipi};

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize};
    background-color: ${({ theme }) => theme.colors.light};
    min-height: calc(100vh - 76px);
    position: relative;
  }

  p {
    line-height: 1.45;
    font-size: 1em;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1.15;
  }

  h1 {
    font-size: 3.052em;
  }

  h2 {
    font-size: 2.441em;
  }

  h3 {
    font-size: 1.953em;
  }

  h4 {
    font-size: 1.563em;
  }

  h5 {
    font-size: 1.25em;
  }

  h6 {
    font-size: 1em;
  }

  pre[class*="language-"] {
    border-radius: 4px;
    background: rgb(255,255,255);
    background: linear-gradient(135deg, rgba(233,250,255,0.1) 0%, rgba(255,230,232,.5) 100%, rgba(255,255,255,0.1) 100%);
    margin-bottom: 1rem;
  }

  :not(pre) > code[class*="language-"] {
    padding: 0.1em .5em 0 0.5em;
    border-radius: 4px;
    background: rgba(219,84,97,.2);
    border: none;
  }
`;

export default GlobalStyle;
