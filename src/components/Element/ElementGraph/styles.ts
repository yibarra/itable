import styled from "styled-components";

export const ElementGraphDiv = styled.div`
  float: left;
  padding: 0;
  position: relative;
  width: 500px;

  .sources {
    animation: swing-in-top-fwd 0.6s 0.9s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
    float: left;
    width: 100%;
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    padding: 60px 0 0;
    width: 100%;
  }
`;