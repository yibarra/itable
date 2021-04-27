import styled from 'styled-components';

export const GridDiv = styled.div`
  margin: 140px 0;
  max-width: 1008px;
  padding: 0;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 3;

  @media only screen and (max-width : 768px) {
    height: auto !important;
    margin: 155px 0 80px;
    padding: 0 10px;
  }
`;