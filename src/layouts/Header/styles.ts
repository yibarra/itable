import styled from "styled-components";

export const HeaderDiv = styled.header`
  background: transparent;
  float: left;
  padding: 0 20px 20px;
  pointer-events: none;
  position: fixed;
  text-align: center;
  width: 100%;
  z-index: 7;

  .header {
    &--content {
      float: none;
      max-width: var(--max-width);
      padding: 10px 0;
      position: relative;
      width: 100%;
    }
  }

  &[data-switch="false"] {
    .header--content {
      > div {
        &:last-child {
          transition: none;
        }
      }
    }
  }

  @media only screen and (max-width : 1024px) {
    padding: 0 20px;
  }
`;

export const HeaderContainerBgDiv = styled.div`
  background: ${({ theme }) => theme.background_color};
  height: 100%;
  max-height: 100px;
  left: 50%;
  opacity: 0.9;
  position: absolute;
  top: 0;
  transform: translate(-50%, 0);
  transition: all var(--animation-time) var(--animation-bezier);
  transition-delay: 300ms;
  width: 100vw;
  z-index: -1;
`;