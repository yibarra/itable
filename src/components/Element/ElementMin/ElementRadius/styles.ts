import styled from "styled-components";

export const ElementRadiusDiv = styled.div`
  background-color: ${({ theme }) => theme.second_color};
  border: none;
  border-radius: 100%;
  display: none;
  height: 0px;
  left: 50%;
  position: absolute;
  top: calc(50% - 2px);
  transition: all var(--animation-time) var(--animation-bezier);
  transform: translate(-50%, -50%);
  width: 0px;
  z-index: 3;
`;