import styled from "styled-components";

export const Line = styled.svg`
  left: 0;
  position: absolute;
  top: 5px;
  width: 100%;

  g {
    path {
      cursor: pointer;
      pointer-events: auto;
      stroke: ${({ theme }) => theme.text_color};
    }
  }
`;