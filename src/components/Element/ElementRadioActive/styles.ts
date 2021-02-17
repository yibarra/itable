import styled from 'styled-components';

export const ElementRadioActiveDiv = styled.div`
  border: none;
  border-radius: 100%;
  color: ${({ theme }: any) => theme.background_color};
  display: none;
  height: 28px;
  font-size: 45px;
  line-height: 24px;
  left: 50%;
  position: absolute;
  top: calc(50% - 2px);
  transform: translate(-50%, -50%);
  width: 28px;

  span {
    animation:spin 4s linear infinite;
    height: 30px;
    left: 50%;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: rotate(0deg) translate(-50%, -50%);
    transform-origin: left top;
    width: 30px;
  }

  &[data-active="true"] {
    display: inline-block;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg) translate(-50%, -50%);
    }
    100% {
      transform: rotate(360deg) translate(-50%, -50%);
    }
  }
`;