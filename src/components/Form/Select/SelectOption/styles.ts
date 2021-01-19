import styled from "styled-components";

export const SelectOptionButton = styled.button`
  background-color: ${({ theme }: any) => theme.text_color};
  border: none;
  cursor: pointer;
  outline: none;
  padding: 10px 13px;
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

  &:after {
    background-color: ${({ theme }: any) => theme.background_color};
    border-radius: 100%;
    content: '';
    display: none;
    height: 10px;
    left: 5px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 10px;
  }

  &[data-active="true"] {
    &:after {
      display: inline-block;
    }
  }
`;