import styled from "styled-components";

export const HeaderTopDiv = styled.div`
  float: left;
  margin: 0;
  width: 100%;

  .header {
    &--logo {
      float: left;
      width: 20px;

      svg {
        width: 50px;

        > path {
          fill: ${({ theme }: any) => theme.text_color};
        }
      }
    }

    &--theme,
    &--search {
      float: right;
    }
  }

  &[data-switch="true"] {
    .header {
      &--logo {
        svg {
          > path {
            fill: ${({ theme }: any) => theme.background_color};
          }
        }
      }
    }
  }
`;