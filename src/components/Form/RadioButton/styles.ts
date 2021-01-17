import styled from "styled-components";

export const RadioButtonContainer = styled.label`
  cursor: pointer;
  float: left;
  margin: 0 20px 0 0;
  padding: 5px 0 5px 25px;
  position: relative;

  input {
    display: none;

    &:checked + .text {
      &:before {
        display: inline-block;
      }
    }
  }

  .text {
    font-size: 12px;
    margin: 0;
    line-height: 1em;
    position: relative;
    width: 100%;

    &:before,
    &:after {
      content: '';
      position: absolute;
    }

    &:before {
      background-color: ${({ theme }: any) => theme.text_color};
      height: 16px;
      left: -25px;
      top: 50%;
      transform: translate(0, -50%);
      width: 16px;
    }

    &:after {
      background-color: ${({ theme }: any) => theme.background_color};
      height: 0;
      border-radius: 100%;
      left: -22px;
      top: 50%;
      transform: translate(0, -50%);
      width: 0;
    }
  }

  &[data-active="true"] {
    .text {
      &:after {
        height: 10px;
        width: 10px;
      }
    }
  }
`;