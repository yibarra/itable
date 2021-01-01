import styled from "styled-components";

export const HeaderContainer = styled.header`
  float: left;
  text-align: center;
  width: 100%;

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
  }

  @media only screen and (max-width : 1024px) {
    padding: 0 20px;
  }
`;