import styled from "styled-components";
import { animated as a } from 'react-spring';

export const RowColumnDiv = styled(a.div)`
  height: 67px;
  margin: 0;
  padding: 0;
  position: absolute;
  width: calc(100% / 18);

  .label {
    color: ${({ theme }) => theme.text_color};
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04em;
    margin: 0;
    line-height: 1em;
    position: absolute;

    &.l {
      left: -20px;
      top: calc(50% - 4px);
      transform: translate(0, -50%);
    }

    &.t {
      left: 50%;
      top: -25px;
      transform: translate(-50%, 0);
    }

    &.e {
      left: -20px;
      top: calc(50% - 3px);
      transform: translate(0, -50%);

      &:before {
        background-color: ${({ theme }: any) => theme.text_color};
        border-radius: 100%;
        content: '';
        height: 6px;
        left: 0;
        position: absolute;
        top: 50%;
        transform: translate(0px, -50%);
        width: 6px;
      }
    }
  }

  &:before {
    background: ${({ theme }) => theme.background_item};
    content: '';
    height: calc(100% + 2px);
    left: -2px;
    opacity: 1;
    position: absolute;
    top: -2px;
    transition: all var(--animation-time) var(--animation-bezier);
    width: calc(100% + 2px);
    z-index: -2;
  }

  @media only screen and (max-width : 1024px) {
    .label {
      display: none;
    }
  }

  @media only screen and (max-width : 768px) {
    left: initial !important;
    top: initial !important;
    position: relative;
    width: calc((100% / 12) - 2px) !important;

    &[data-empty="true"] {
      display: none;
    }
  }

  @media only screen and (max-width : 480px) {
    width: calc((100% / 6) - 2px) !important;
  }
`;