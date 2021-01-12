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
`;