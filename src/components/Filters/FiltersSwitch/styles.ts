import styled from "styled-components";

export const FiltersSwitchDiv = styled.div`
  float: left;
  pointer-events: none;
  width: 100%;

  .filter-switch {
    &--item {
      float: none;
      padding: 5px 0 0;
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

      &[data-filter="atomicRadius"],
      &[data-filter="atomicMass"],
      &[data-filter="yearDiscovered"] {
        &:before {
          display: none;
        }
      }

      &:before {
        background-color: ${({ theme }) => theme.background_color};
        content: '';
        height: calc(100% - 10px);
        left: 50%;
        opacity: 0.9;
        position: absolute;
        top: 0;
        transform: translate(-50%, 0);
        width: 100vw;
      }
    }
  }

  &:before {
    background-color: ${({ theme }) => theme.background_color};
    content: '';
    height: 100%;
    left: 50%;
    opacity: 0.9;
    padding: 0 0 10px;
    position: absolute;
    top: 5px;
    transform: translate(-50%, 0);
    width: 100vw;
  }
`;