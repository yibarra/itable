import styled from "styled-components";

export const EOrbitalDiv = styled.div`
  float: left;
  height: 245px;
  margin: 0 0 40px;
  padding: 0;
  position: relative;
  width: 245px;

  .orbit {
    animation: ani-circle 20s infinite linear;
    border: 1px dashed ${({ theme }: any) => theme.second_color};
    border-radius: 100%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;

    .atom {
      background-color: ${({ theme }: any) => theme.second_color};
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

  .icon-plus {
    font-size: 14px;
    font-weight: 300;
    left: calc(50% + 1px);
    line-height: 11px;
    position: absolute;
    top: calc(50% - 1px);
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  &:before {
    background-color: ${({ theme }: any) => theme.second_color};
    content: '';
    border-radius: 100%;
    height: 20px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
  }

  @keyframes ani-circle {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;