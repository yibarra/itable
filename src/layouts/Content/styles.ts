import styled from 'styled-components';

export const ContentContainerDiv = styled.div`
  float: left;
  height: auto;
  padding: 0;
  position: relative;
  text-align: center;
  width: 100vw;

  > div {
    position: relative;

    &:last-child {
      display: none;
      opacity: 0;
    }
  }

  &[data-switch="true"] {
    > div {
      &:first-child {
        left: 50%;
        position: absolute;
        top: 0;
        transform: translate(-50%, 0);
      }

      &:last-child {
        animation: element-in 0.9s var(--animation-bezier) 0s forwards;
        display: inline-block;
      }
    }
  }

  @keyframes element-in {
    0% {
      opacity: 0;
      padding: 0;
      top: 100vh;
    }
    50% {
      opacity: 0;
      padding: 120px 20px 60px;
      top: 100vh;
    }
    100% {
      opacity: 1;
      padding: 120px 20px 60px;
      top: 0vh;
    }
  }
`;