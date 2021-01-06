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
  }

  .title {
    color: ${({ theme }: any) => theme.text_color};
    font-size: 12px;
    margin: 0;
    letter-spacing: -0.02em;
  }
`;