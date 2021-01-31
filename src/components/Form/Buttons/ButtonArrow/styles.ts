import styled from "styled-components";

export const ButtonArrowButton = styled.button`
  background-color: transparent;
  border: none;
  height: 20px;
  outline: none;
  line-height: 1em;
  padding: 0;
  position: relative;
  width: 30px;

  .material-icons {
    color: ${({ theme }: any) => theme.text_color};
    font-size: 18px;
  }

  &[data-active="true"] {
  }
`;