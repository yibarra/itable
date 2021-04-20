import styled from "styled-components";

export const FiltersContainer = styled.div`
  float: left;
  padding: 10px 0 0;
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
      padding: 0 0 10px 2px;
    }
  }
`;