import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: none;
  float: left;
  padding: 0;
  position: relative;
  width: 100%;

  .filters-container {
    text-align: left;
    width: 100%;

    &--list,
    &--title {
      float: left;
      width: 100%;
    }

    &--list {
      padding: 10px 0 10px 2px;
    }
    
    &--title {
      font-size: 12px;
      margin: 0;
      letter-spacing: 0.04em;
    }
  }
`;