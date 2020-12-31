import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }: any) => theme?.background_color};
    color: ${({ theme }: any) => theme?.text_color};
  }
`;