import styled from "styled-components";

export const HeaderFiltersDiv = styled.div`
  float: left;
  margin: 0;
  width: 100%;

  .filters,
  .return {
    float: left;
    position: relative;
    width: 100%;
  }

  .return {
    display: none;
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