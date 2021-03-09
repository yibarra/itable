import styled from 'styled-components';

export const SearchDiv = styled.div`
  float: left;
  padding: 0 0 10px;
  position: relative;
  text-align: right;
  width: 100%;

  button {
    padding: 0;
    width: 20px;
  }

  canvas {
    left: 30px;
    position: absolute;
    top: calc(50% - 5px);
    transform: translate(0, -50%);
  }

  &[data-active="true"] {
    text-align: left;
    width: 250px;
  }
`;