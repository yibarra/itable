import styled from "styled-components";

export const HeaderContainer = styled.header`
  float: left;
  padding: 0 0 20px;
  position: fixed;
  text-align: center;
  width: 100%;
  z-index: 7;

  .header {
    &--content {
      float: none;
      max-width: var(--max-width);
      padding: 20px 0;
      width: 100%;
    }
  
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

    &--filters,
    &--top {
      float: left;
      margin: 0;
      width: 100%;
    }
  }

  @media only screen and (max-width : 1024px) {
    padding: 0 20px;
  }
`;