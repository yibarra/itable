import styled from "styled-components";

export const FooterDiv = styled.footer`
  bottom: 20px;
  left: 20px;
  position: fixed;

  a {
    color: ${({ theme }: any) => theme.text_color};
    font-size: 12px;
    float: left;
    padding: 0 5px;
    position: relative;

    .material-icons,
    .text {
      float: left;
      white-space: normal;
    }

    .material-icons {
      font-size: 12px;
      margin-right: 5px;
      position: relative;
      top: -5px;
    }

    .text {
      font-size: 10px;
      font-weight: 300;
      line-height: 0.6em;
    }
  }
`;