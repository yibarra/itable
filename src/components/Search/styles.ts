import styled from 'styled-components';

export const SearchDiv = styled.div`
  float: left;
  margin: 0 0 20px;
  padding: 0;
  position: relative;
  text-align: right;
  width: 100%;

  button {
    padding: 0;
    width: 20px;
  }

  &[data-active="true"] {
    text-align: left;
    width: 210px;

    p {
      margin-right: 40px;
      
    }
  }
`;

export const SearchTermP = styled.p`
  font-size: 14px;
  right: calc(100% - 20px);
  margin: 0;
  letter-spacing: -0.04em;
  position: absolute;
  text-align: right;
  text-transform: capitalize;
  top: 50%;
  transform: translate(0, -50%);
  width: 100px;
`;