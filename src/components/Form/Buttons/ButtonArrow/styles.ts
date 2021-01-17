import styled from "styled-components";

export const ButtonArrowButton = styled.button`
  background-color: transparent;
  border: none;
  height: 20px;
  outline: none;
  line-height: 1em;
  padding: 0;
  position: relative;
  width: 30px;

  .triangle {
    border-top-color: ${({ theme }: any) => theme.background_color};
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-top: 10px solid transparent;
    height: 0;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0;
  }

  &[data-active="true"] {
    .triangle {
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }
`;