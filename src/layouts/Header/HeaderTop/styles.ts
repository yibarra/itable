import styled from "styled-components";

export const HeaderTopDiv = styled.div`
  float: left;
  margin: 0;
  width: 100%;

  .header {
    &--logo {
      float: left;
      position: relative;
      width: 20px;

      svg {
        width: 60px;

        path,
        polygon {
          fill: ${({ theme }: any) => theme.text_color};
        }
      }
    }

    &--theme,
    &--search {
      float: right;
      pointer-events: auto;
    }

    &--theme {
      align-items: flex-end;
      display: inline-flex;
      flex-flow: column wrap;
      justify-content: flex-end;
      right: 20px;
      position: absolute;
      top: 20px;
    }
  }

  &[data-switch="true"] {
    .header {
      &--logo {
        .subtitle {
          color: ${({ theme }: any) => theme.background_color};
        }

        svg {
          path,
          polygon {
            fill: ${({ theme }: any) => theme.background_color};
          }
        }
      }
    }
  }
`;