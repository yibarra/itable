import styled from "styled-components";

export const SelectTitleDiv = styled.div`
  background-color: ${({ theme }: any) => theme.text_color};
  cursor: pointer;
  border-radius: 0;
  float: left;
  padding: 2px 20px 3px;
  width: 100%;
  vertical-align: top;

  .text {
    color: ${({ theme }: any) => theme.background_color};
    float: left;
    font-size: 11px;
    letter-spacing: -0.04em;
    line-height: 1em;
    padding-left: 5px;
  }

  button {
    left: 0;
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translate(0, -50%);

    &:before,
    &:after {
      content: '';
      display: none;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
    }

    &:before {
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 10px solid ${({ theme }: any) => theme.background_color};
      height: 0;
      left: 6px;
      width: 0;
    }

    &:after {
      background-color: ${({ theme }: any) => theme.background_color};
      border-radius: 0%;
      display: inline-block;
      height: 10px;
      left: 7px;
      width: 10px;
    }

    &[data-active="true"] {
      &:after {
        display: none;
      }

      &:before {
        display: inline-block;
      }
    }
  }
`;