import styled from "styled-components";

export const EOrbitalDiv = styled.div`
  float: left;
  height: 200px;
  padding: 0;
  position: relative;
  width: 200px;

  .orbit {
    border: 1px solid ${({ theme }: any) => theme.text_color};
    border-radius: 100%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;

    .atom {
      background-color: ${({ theme }: any) => theme.text_color};
      height: 8px;
      border-radius: 100%;
      left: calc(50% - 4px);
      position: absolute;
      top: calc(50% - 4px);
      width: 8px;
    }

    &[data-active="true"] {
      opacity: 0.1;
    }
  }
`;