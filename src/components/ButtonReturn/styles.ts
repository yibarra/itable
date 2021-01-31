import styled from "styled-components";

export const ButtonReturnContainer = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  float: left;
  flex-flow: row wrap;
  padding: 0;
  outline: none;
  position: relative;

  .material-icons,
  .text {
    color: ${({ theme }: any) => theme.text_color};
    float: left;
  }

  .text {
    font-size: 12px;
    line-height: 1em;
    letter-spacing: 0.04em;
    margin: 0 0 0 10px;
    position: relative;
  }

  &[data-switch="true"] {
    .material-icons,
    .text {
      color: ${({ theme }: any) => theme.background_color};
    }
  }
`;