import styled from "styled-components";

export const ElementLinkContainer = styled.div`
  float: left;
  padding: 10px 0;
  position: relative;
  width: 100%;
  vertical-align: top;

  .link,
  .title {
    float: left;
  }

  .link {
    color: ${({ theme }: any) => theme.background_color};
    padding: 10px 20px 0;
    width: 100%;

    .material-icons,
    .text {
      color: ${({ theme }: any) => theme.background_color};
    }

    .text {
      &:before {
        background-color: ${({ theme }: any) => theme.background_color};
      }
    }
  }

  .title {
    color: ${({ theme }: any) => theme.background_color};
    font-size: 12px;
    margin: 0;
    letter-spacing: -0.02em;
  }
`;