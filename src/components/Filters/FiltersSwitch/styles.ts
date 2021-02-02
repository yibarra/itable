import styled from "styled-components";

export const FiltersSwitchDiv = styled.div`
  float: left;
  pointer-events: none;
  width: 100%;

  .filter-switch {

    &--item {
      float: none;
      padding: 20px 0;
      position: relative;
      width: 100%;

      &[data-filter="atomicMass"],
      &[data-filter="atomicRadius"],
      &[data-filter="electronAffinity"],
      &[data-filter="yearDiscovered"] {
        max-width: 768px;
        text-align: center;
        width: 100%;
      }

      &[data-filter="atomicRadius"] {
        max-width: 480px;
      }
      
      &[data-filter="atomicMass"],
      &[data-filter="electronAffinity"] {
        max-width: 640px;
      }

      &[data-filter="yearDiscovered"] {
        max-width: 740px;
      }
    }
  }
`;