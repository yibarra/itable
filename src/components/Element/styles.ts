import styled from "styled-components";

export const ElementContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
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
`;