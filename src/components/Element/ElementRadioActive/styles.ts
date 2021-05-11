import styled from 'styled-components';

export const ElementRadioActiveDiv = styled.div`
  border: none;
  border-radius: 100%;
  color: ${({ theme }: any) => theme.background_color};
  display: none;
  height: 20px;
  left: 5px;
  position: absolute;
  top: 0;
  width: 20px;

  svg {
    animation:spin 4s linear infinite;
    height: 10px;
    left: -2px;
    pointer-events: none;
    position: absolute;
    top: 2px;
    transform: rotate(0deg);
    transform-origin: center;
    width: 10px;

    .path {
      &-active,
      &-bg {
        left: 0;
        position: absolute;
        top: 0;
      }

      &-active {
        z-index: 2;
      }

      &-bg {
        fill: ${({ theme }) => theme.second_color};
        z-index: 1;
      }
    }
  }

  &[data-active="true"] {
    display: inline-block;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;