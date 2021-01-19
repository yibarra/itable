import styled from "styled-components";

export const ElementInfoContainer = styled.div`
  float: left;
  padding: 0 20px 0 0;
  position: relative;
  width: calc(100% - 540px);

  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    padding: 0;
    width: 100%;
  }
`;