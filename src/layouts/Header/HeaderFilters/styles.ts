import styled from "styled-components";

export const HeaderFiltersDiv = styled.div`
  float: left;
  margin: 0;
  width: 100%;

  .filters,
  .return {
    float: left;
    pointer-events: auto;
    position: relative;
    width: 100%;
  }

  .filters {
    pointer-events: none;
  }

  .return {
    display: none;
    margin: 20px 0 0;
  }

  &[data-switch="true"] {
    .filters{
      display: none;
    }
    
    .return {
      display: inline-block;
    }
  }
`;