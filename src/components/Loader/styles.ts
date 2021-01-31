import styled from "styled-components";

export const LoaderContainer = styled.div`
  background-color: transparent;
  height: 100vh;
  left: 0;
  opacity: 1;
  pointer-events: none;
  position: fixed;
  top: 0;
  transition: all var(--animation-time) var(--animation-bezier);
  transition-delay: 1s;
  width: 100%;
  z-index: 1;

  svg {
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%) scale(1);
    transition: all var(--animation-time) var(--animation-bezier);
    top: 50%;
    transition-delay: 1.2s;
    width: 70px;
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
    top: 0;
    transition: all var(--animation-time) var(--animation-bezier);
    transition-delay: 1.2s;
    transform: translate(-50%, 0);
    transform-origin: top left;
    width: 100%;
  }

  &[data-active="true"] {
    opacity: 0;
    pointer-events: none;

    svg {
      transform: translate(-50%, -50%) scale(1);
      top: 50%;
    }

    &:before {
      hight: 100vh;
    }
  }

  &[data-active="false"] {
    opacity: 1;

    svg {
      transform: translate(-50%, -50%) scale(0.7);
      top: -50%;
    }

    &:before {
      height: 0;
    }
  }
`;