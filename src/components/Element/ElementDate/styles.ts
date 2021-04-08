import styled from "styled-components";

export const ElementDateP = styled.p`
  animation: swing-in-top-fwd 0.6s 0.7s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
  align-items: flex-end;
  color: ${({ theme }: any) => theme.second_color};
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
    letter-spacing: -0.04em;
    position: relative;
    vertical-align: top;
  }

  .date {
    font-size: 16px;
    font-weight: 600;
    top: 2px;
  }

  .text {
    font-size: 12px;
    font-weight: 400;
    margin: 0 8px 0 0;
  }
`;