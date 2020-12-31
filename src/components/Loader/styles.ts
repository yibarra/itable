import styled from "styled-components";

export const LoaderContainer = styled.div`
  background-color: transparent;
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;

  svg {
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    transition: all var(--animation-time) var(--animation-bezier);
    top: 50%;
    width: 75px;
    z-index: 1;

    > path {
      fill: ${({ theme }: any) => theme.text_color};
    }
  }

  &:before {
    background-color: ${({ theme }: any) => theme.background_color};
    content: '';
    height: 100vh;
    left: 50%;
    position: absolute;
    transition: all var(--animation-time) var(--animation-bezier);
    top: 0;
    transform: translate(-50%, 0);
    transform-origin: top left;
    transition-delay: var(--animation-time);
    width: 100%;
  }

  &[data-active="true"] {
    svg {
      transform: translate(-50%, -50%) scale(1);
      top: 50%;
    }

    &:before {
      hight: 100%;
    }
  }

  &[data-active="false"] {
    svg {
      transform: translate(-50%, -50%) scale(0.7);
      top: -50%;
    }

    &:before {
      height: 0;
    }
  }
`;