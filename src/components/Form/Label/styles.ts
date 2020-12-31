import styled from "styled-components";

// label text
export const LabelTextContainer = styled.label`
  color: ${({ theme }: any) => theme.text_color};
  float: left;
  font-size: 12px;
  font-weight: 400;
  margin: 0 0 10px;
  letter-spacing: 0.04em;
  line-height: 1em;
  position: relative;
  width: auto;
`;