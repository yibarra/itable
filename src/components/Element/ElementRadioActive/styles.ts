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

  span {
    animation:spin 4s linear infinite;
    height: 30px;
    font-size: 20px;
    left: -10px;
    pointer-events: none;
    position: absolute;
    top: -5px;
    transform: rotate(0deg);
    transform-origin: center;
    width: 30px;
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