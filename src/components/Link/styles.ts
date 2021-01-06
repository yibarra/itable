import styled from "styled-components";

export const LinkContainer = styled.a`
  align-items: center;
  align-content: flex-start;
  color: ${({ theme }: any) => theme.text_color};
  display: inline-flex;
  flex-flow: row nowrap;
  text-decoration: none;
  width: 100%;

  .material-icons {
    font-size: 25px;
    margin: 0 10px 0 0;
  }

  .text {
    font-size: 12px;
    letter-spacing: -0.02em;
    position: relative;

    &:before {
      background-color: ${({ theme }: any) => theme.text_color};
      content: '';
      height: 1px;
      left: 0;
      position: absolute;
      transition: width 200ms var(--animation-bezier);
      top: 100%;
      width: 0;
    }
  }

  &:hover,
  &:active {
    .material-icons {
      text-decoration: none;
    }

    .text {
      &:before {
        width: 100%;
      }
    }
  }
`;