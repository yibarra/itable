import styled from "styled-components";

export const RowColumnContainer = styled.div`
  height: auto;
  float: left;
  margin: 0 1px;
  padding: 0;
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

      &:before {
        background-color: ${({ theme }: any) => theme.text_color};
        border-radius: 100%;
        content: '';
        height: 6px;
        left: 0;
        position: absolute;
        top: 50%;
        transform: translate(0,- 50%);
        width: 6px;
      }
    }
  }

  @media only screen and (max-width : 1024px) {
    width: calc((100% / 18) - 2px);

    .label {
      display: none;
    }
  }

  @media only screen and (max-width : 768px) {
    width: calc((100% / 14) - 2px);

    &[data-empty="true"] {
      display: none;
    }
  }

  @media only screen and (max-width : 480px) {
    width: calc((100% / 6) - 2px);
  }
`;