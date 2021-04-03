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
        left: -2px;
        position: relative;
        width: 30px;

        .st0 {
          fill: none;
          stroke: ${({ theme }: any) => theme.text_color};
          stroke-width: 3;
          stroke-miterlimit: 10;
        }

        .st1 {
          fill: ${({ theme }: any) => theme.text_color};
          fill-rule: evenodd;
          clip-rule: evenodd;
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
      right: 0;
      position: absolute;
      top: 10px;
    }
  }

  &[data-switch="true"] {
    .header {
      &--logo {
        .subtitle {
          color: ${({ theme }: any) => theme.background_color};
        }

        svg {
          .st0 {
            fill: ${({ theme }: any) => theme.background_color};
          }
        }
      }
    }
  }
`;