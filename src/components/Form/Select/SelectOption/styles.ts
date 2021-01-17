import styled from "styled-components";

export const SelectOptionButton = styled.button`
  background-color: ${({ theme }: any) => theme.background_color};
  border: none;
  cursor: pointer;
  outline: none;
  padding: 10px 15px;
  text-align: left;
  transition: background-color var(--animation-time) var(--animation);
  width: 100%;
  
  .name {
    color: ${({ theme }: any) => theme.text_color};
    font-size: 12px;
    font-weight: 400;
    float: left;
    letter-spacing: -0.04em;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
  }

  &[data-active="true"] {
    background-color: ${({ theme }: any) => theme.text_color};

    .name {
      color: ${({ theme }: any) => theme.background_color};
    }
  }
`;