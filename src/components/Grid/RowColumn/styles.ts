import styled from "styled-components";

export const RowColumnContainer = styled.div`
  height: auto;
  float: left;
  position: relative;
  width: calc((100% / 18) - 2px);

  .label {
    color: ${({ theme }) => theme.text_color};
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    line-height: 1em;
    position: absolute;

    &.l {
      left: -20px;
      top: 50%;
      transform: translate(0, -50%);
    }

    &.t {
      left: 50%;
      top: -25px;
      transform: translate(-50%, 0);
    }

    &.e {
      left: -20px;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
`;