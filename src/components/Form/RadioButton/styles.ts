import styled from "styled-components";

export const RadioButtonContainer = styled.label`
  float: left;
  margin: 0 20px 0 0;
  padding: 0 0 0 25px;
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
      height: 10px;
      border-radius: 100%;
      left: -22px;
      top: 50%;
      transform: translate(0, -50%);
      width: 10px;
    }
  }
`;