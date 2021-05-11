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
    color: ${({ theme }: any) => theme.second_color};
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

    &:before,
    &:after {
      border: none;
      border-top: 1px dotted ${({ theme }: any) => theme.second_color};
      bottom: -17px;
      content: '';
      height: 0;
      left: -25px;
      position: absolute;
      transform: rotate(-45deg) translate(-26px,-2px);
      width: 77px;
    }

    &:before {
      border: 1px dotted ${({ theme }: any) => theme.second_color};
      border-right: none;
      height: 3px;
      bottom: 1px;
      transform: rotate(-45deg) translate(-56px, 36px);
      width: 3px;
    }
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
    border-right: 4px dotted ${({ theme }: any) => theme.second_color};
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
        border: 1px dotted ${({ theme }: any) => theme.second_color};
        border-left-color: transparent;
        border-top-color: transparent;
        border-radius: 0;
        bottom: initial;
        content: '';
        height: 30px;
        left: -3px;
        right: initial;
        position: absolute;
        top: 100%;
        transform: rotate(-45deg) translate(0, 7px);
        width: 45px;
        z-index: -1;
      }
    }
  }

  &:nth-child(2),
  &:nth-child(5),
  &:nth-child(10) {
    .name {
      &:before {
        border-top: 1px dotted ${({ theme }) => theme.second_color};
        left: 35px;
        top: calc(100% - 50px);
        transform: rotate(-45deg) translate(-13px, 10px);
        width: 60px;
      }
    }
  }

  &:nth-child(3),
  &:nth-child(5),
  &:nth-child(7),
  &:nth-child(8),
  &:nth-child(10),
  &:nth-child(11),
  &:nth-child(13),
  &:nth-child(14),
  &:nth-child(15),
  &:nth-child(17),
  &:nth-child(18) {
    .quote {
      &:before {
        display: none;
      }
    }
  }

  &:nth-child(17),
  &:nth-child(18) {
    .quote {
      &:after {
        display: none;
      }
    }
  }

  &:last-child {
    .quote {
      &:after,
      &:before {
        display: none;
      }
    }

    &:after {
      display: inline-block;
    }
  }
`;