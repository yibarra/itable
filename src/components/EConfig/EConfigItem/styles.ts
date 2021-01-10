import styled from "styled-components";

export const EConfigItemDiv = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  flex-flow: row wrap;
  height: 50px;
  opacity: 1;
  position: absolute;
  width: 50px;

  .level,
  .quote,
  .name {
    color: ${({ theme }: any) => theme.text_color};
    font-size: 12px;
    line-height: 1em;
  }

  .level {
    font-size: 16px;
  }

  .quote {
    font-size: 9px;
    font-weight: 500;
    left: calc(50% + 10px);
    position: absolute;
    top: 10px;
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
  }

  &:before {
    background-color: ${({ theme }: any) => theme.text_color};
    bottom: 0;
    height: 2px;
    left: -10px;
    transform: rotate(-45deg);
    width: 70px;
  }

  &:after {
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 4px solid ${({ theme }: any) => theme.text_color};
    height: 0;
    display: none;
    bottom: -29px;
    left: -3px;
    transform: rotate(-45deg);
    width: 0;
  }

  &[data-active="true"] {
    opacity: 0;
  }

  &[data-last="true"],
  &[data-arrow="true"] {
    &:after {
      display: inline-block;
    }
  }

  &:last-child {
    &:after {
      display: inline-block;
    }
  }
`;