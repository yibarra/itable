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
    padding: 10px 20px 0;
    width: 100%;

    .material-icons,
    .text {
      color: ${({ theme }: any) => theme.second_color};
    }

    .text {
      float: left;
      overflow: hidden;
      padding: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .title {
    color: ${({ theme }: any) => theme.second_color};
    font-size: 12px;
    margin: 0;
    letter-spacing: -0.02em;
  }
`;