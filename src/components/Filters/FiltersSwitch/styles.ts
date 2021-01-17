import styled from "styled-components";

export const FiltersSwitchDiv = styled.div`
  float: left;
  width: 100%;

  .filter-switch {
    &--item {
      float: none;
      padding: 20px 0;
      position: relative;
      width: 100%;

      &[data-filter="atomicMass"],
      &[data-filter="yearDiscovered"] {
        max-width: 768px;
        text-align: center;
        width: 100%;

        > div {
        }
      }
    }
  }
`;