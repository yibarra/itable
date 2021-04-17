import styled from "styled-components";

export const ElementInfoContainer = styled.div`
  float: left;
  padding: 0;
  position: relative;
  width: calc(100% - 500px);

  h1 {
    margin: 0 0 9px;
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    padding: 30px 0;
    width: 100%;
  }
`;