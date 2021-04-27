import styled from "styled-components";

export const ElementContainer = styled.div`
  min-height: 100vh;
  padding: 120px 20px 60px;
  position: relative;
  text-align: center;
  width: 100vw;
  z-index: 4;

  .element {
    &--container {
      float: none;
      max-width: var(--max-width);
      text-align: left;
      width: 100%;
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    padding: 90px 20px !important;
  }
`;