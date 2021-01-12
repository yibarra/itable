import styled from "styled-components";

export const ElementDateContainer = styled.p`
  align-items: flex-end;
  color: ${({ theme }: any) => theme.background_color};
  display: inline-flex;
  flex-flow: row nowrap;
  float: left;
  margin: 0;
  width: 100%;
  vertical-align: top;

  .date,
  .text {
    display: inline-block;
    line-height: 1em;
    letter-spacing: -0.02em;
    vertical-align: top;
  }

  .date {
    font-size: 16px;
    font-weight: 400;
  }

  .text {
    font-size: 12px;
    font-weight: 400;
    margin: 0 8px 0 0;
  }
`;