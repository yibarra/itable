import styled from "styled-components";

export const ElementInfoContainer = styled.div`
  float: none;
  padding: 0;
  position: relative;
  width: 100%;

  h1 {
    margin: 0 0 13px;
  }

  .sources {
    animation: swing-in-top-fwd 0.6s 0.9s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
    float: left;
    width: 100%;
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    padding: 30px 0;
    width: 100%;
  }
`;