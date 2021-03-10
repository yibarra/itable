import styled from 'styled-components';

export const AudioAnalyserDiv = styled.div`
  right: 0;
  position: absolute;
  top: calc(50% - 5px);
  transform: translate(0, -50%);
  width: auto;

  canvas {
    float: left;
    position: relative;
    top: 5px;
    width: 100%;
  }
`;