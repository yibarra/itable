import styled from "styled-components";

export const SelectOptionButton = styled.button`
  background-color: ${({ theme }: any) => theme.text_color};
  border: none;
  border-bottom: 2px solid ${({ theme }: any) => theme.background_color};
  cursor: pointer;
  outline: none;
  padding: 5px 0;
  position: relative;
  text-align: left;
  transition: background-color var(--animation-time) var(--animation);
  width: 100%;
  
  .name {
    font-family: var(--font-family);
    color: ${({ theme }: any) => theme.background_color};
    font-size: 11px;
    font-weight: 400;
    float: left;
    letter-spacing: -0.04em;
    padding: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
  }

  &[data-active="true"] {
    background-color: ${({ theme }: any) => theme.background_color};
    
    .name {
      color: ${({ theme }: any) => theme.text_color};
    }
  }
`;