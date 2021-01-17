import { animated as a } from 'react-spring';
import styled from "styled-components";

export const SelectContentDiv = styled(a.div)`
  background-color: ${({ theme }: any) => theme.text_color};
  border: none;
  border-radius: 0 0 6px 6px;
  float: left;
  height: 0;
  left: 0;
  overflow: hidden;
  overflow-y: auto;
  padding: 0;
  position: absolute;
  top: 100%;
  width: 100%;
`;