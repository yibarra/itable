import styled from 'styled-components';

export const ElementMinInfoContainer = styled.div`
  float: left;
  width: 100%;

  .atomic-number,
  .name,
  .symbol {
    color: inherit;
    float: left;
    line-height: 1em;
    padding: 0 5px;
    pointer-events: none;
    text-align: center;
    transition: all var(--animation-time) var(--animation-bezier);
    width: 100%;
  }

  .atomic-number {
    font-size: 9px;
    right: 5px;
    padding: 0;
    position: absolute;
    text-align: right;
    transition-duration: 0s;
    top: 5px;
    width: auto;
  }

  .name {
    font-size: 9px;
    margin: 0;
    line-height: 1.4em;
    overflow: hidden;
    padding: 3px 5px;
    position: relative;
    text-overflow: ellipsis;
    transition-duration: 0.4s;
    transition-delay: 1.2s;
    white-space: nowrap;
    width: 100%;
    z-index: 1;

    &:before {
      background-color: ${({ theme }: any) => theme.second_color};
      content: '';
      display: none;
      height: 100%;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% + 10px);
      z-index: -1;
    }
  }

  .symbol {
    font-size: 20px;
    margin: 0 0 6px;
    transition-duration: 0s;
  }

  @media(max-width: 480px) {
    .name {
      display: inline-block;
    }
  }
`;