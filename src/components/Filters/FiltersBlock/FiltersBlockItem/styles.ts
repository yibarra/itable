import styled from "styled-components";

export const FiltersBlockItemContainer = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  float: none;
  margin: 2px;
  outline: none;
  padding: 7px 20px 5px 25px;
  position: relative;
  text-align: center;
  vertical-align: top;

  .block {
    border: 2px solid transparent;
    border-radius: 0;
    height: 16px;
    left: 0;
    padding: 1px 0 0;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 16px;

    &:before {
      background-color: ${({ theme }: any) => theme.background_color};
      border: 2px solid ${({ theme }: any) => theme.background_color};
      border-radius: 100%;
      content: '';
      height: calc(100% - 2px);
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      transition: all var(--animation-time) var(--animation-bezier);
      top: 50%;
      width: calc(100% - 2px);
    }
  }

  .name {
    color: ${({ theme }: any) => theme.text_color};
    font-size: 12px;
    float: left;
    font-size: 10px;
    line-height: 1em;
    margin: 1px 0 0;
    letter-spacing: 0.04em;
  }

  &:hover,
  &[data-active="true"] {
    .block {
      &:before {
        background-color: transparent;
      }
    }
  }
`;