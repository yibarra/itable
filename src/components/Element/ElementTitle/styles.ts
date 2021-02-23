import styled from "styled-components";

export const ElementTitleHOne = styled.h1`
  animation: swing-in-top-fwd 0.6s 0.7s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
  color: ${({ theme }) => theme.background_color};
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 20px;
  letter-spacing: -0.04em;
  width: 100%;
  vertical-align: top;
`;