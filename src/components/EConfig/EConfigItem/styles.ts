import styled from "styled-components";
import { rgba } from 'polished';

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
    color: ${({ theme }: any) => theme.second_color};
    font-size: 12px;
    line-height: 1em;
  }

  .level {
    font-size: 16px;
  }

  .name {
    position: relative;
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
    background-color: ${({ theme }: any) => theme.second_color};
    bottom: 0;
    height: 2px;
    left: 0;
    transform: rotate(-45deg) translate(5px, -31px);
    transform-origin: right;
    width: 70px;
  }

  &:after {
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 4px solid ${({ theme }: any) => theme.second_color};
    height: 0;
    display: none;
    bottom: -25px;
    left: 0px;
    transform-origin: right;
    transform: rotate(-45deg) scale(1) translate(-3px, 0px);
    width: 0;
  }

  &[data-active="true"] {
    display: none;
  }

  &[data-last="true"],
  &[data-arrow="true"] {
    &:after {
      display: inline-block;
    }
  }

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(5),
  &:nth-child(7),
  &:nth-child(10),
  &:nth-child(13) {
    .name {
      &:before {
        background-color: transparent;
        border: 1px dashed ${({ theme }: any) => rgba(theme.background_color, 0.4)};
        border-left-color: transparent;
        border-radius: 0;
        bottom: initial;
        content: '';
        height: 34px;
        left: -5px;
        right: initial;
        position: absolute;
        top: calc(100% + 4px);
        transform: rotate(-45deg);
        width: 50px;
        z-index: -1;
      }
    }
  }

  &:nth-child(2),
  &:nth-child(5),
  &:nth-child(10) {
    .name {
      &:before {
        left: 49px;
        top: calc(100% - 50px);
      }
    }
  }

  &:last-child {
    &:after {
      display: inline-block;
    }
  }
`;