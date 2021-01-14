import styled from "styled-components";

export const EOrbitalDiv = styled.div`
  float: left;
  margin: 0 0 40px;
  padding: 0;
  position: relative;

  .orbit {
    border: 2px solid ${({ theme }: any) => theme.background_color};
    border-radius: 100%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%) rotate(-90deg);
    top: 50%;

    .atom {
      background-color: ${({ theme }: any) => theme.background_color};
      height: 8px;
      border-radius: 100%;
      left: calc(50% - 4px);
      position: absolute;
      top: calc(50% - 4px);
	    transform-origin:50% 50%;
      width: 8px;
    }

    &[data-active="true"] {
      opacity: 0.1;
    }
  }
`;