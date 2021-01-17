import styled from "styled-components";

export const SelectTitleDiv = styled.div`
  background-color: ${({ theme }: any) => theme.text_color};
  cursor: pointer;
  border-radius: 0;
  float: left;
  padding: 5px 5px 7px;
  width: 100%;
  vertical-align: top;

  .text {
    color: ${({ theme }: any) => theme.background_color};
    float: left;
    font-size: 12px;
    letter-spacing: -0.04em;
    line-height: 1em;
    padding-left: 5px;
  }

  button {
    right: 0;
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translate(0, -50%);
  }
`;