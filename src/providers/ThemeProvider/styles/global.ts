import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body,
  body * {
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
  }

  html,
  body {
    float: left;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    vertical-align: top;
  }

  html {
    overflow: hidden;
    overflow-y: auto;
  }

  body {
    background: ${({ theme }: any) => theme?.background_color};
    color: ${({ theme }: any) => theme?.text_color};
    height: auto;
    font-family: 'Roboto Mono', monospace;
    min-height: 100vh;
    overflow: hidden;
    overflow-anchor: none;
  }

  #root {
    float: left;
    min-height: 100vh;
    position: relative;
    width: 100%;
    vertical-align: top;
    z-index: 99;
  }

  :root {
    --animation-time: 400ms;
    --animation-bezier: cubic-bezier(0.45, 0.25, 0.60, 0.95);
    --max-width: 1120px;
  }
`;