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

      .subtitle {
        color: ${({ theme }: any) => theme.text_color};
        position: absolute;
        left: 70px;
        font-size: 10px;
        letter-spacing: 0.04em;
        top: 50%;
        transform: translate(0, -50%);
        text-transform: uppercase;
        white-space: nowrap;
      }

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