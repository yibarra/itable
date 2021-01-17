import styled from 'styled-components';

export const GridDiv = styled.div`
  margin: 190px 0;
  max-width: 1024px;
  padding: 0;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 3;

  @media only screen and (max-width : 768px) {
    height: auto !important;
    padding: 0 20px;
  }
`;