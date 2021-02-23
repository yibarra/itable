import styled from "styled-components";

export const ElementSummaryP = styled.p`
  animation: swing-in-top-fwd 0.6s 0.7s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
  color: ${({ theme }: any) => theme.background_color};
  font-size: 12px;
  margin: 20px 0 0;
  line-height: 1.7em;
  letter-spacing: -0.04em;
  position: relative;
  width: 100%;
`;