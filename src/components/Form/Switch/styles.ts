import { animated as a } from 'react-spring';
import styled from 'styled-components';

// switch container
export const SwitchContainer = styled(a.div)`
  background-color: transparent;
  border: none;
  height: auto;
  float: left;
  overflow: hidden;
  padding: 3px 8px;
  position: relative;
  width: 32px;

  .point {
    background-color: transparent;
    border: 2px solid ${({ theme }: any) => theme.text_color};
    border-radius: 100%;
    float: left;
    height: 14px;
    margin: 0;
    position: relative;
    transform: translate(-50%, 0);
    width: 14px;

    &:before,
    &:after {
      background-color: ${({ theme }: any) => theme.text_color};
      content: '';
      height: 2px;
      position: absolute;
      top: 50%;
      transform: translate(0px, -50%);
      width: 20px;
    }

    &:before {
      left: calc(100% + 2px);
    }

    &:after {
      right: calc(100% + 2px);
    }
  }

  &[data-switch="true"] {
    .point {
      border: 2px solid ${({ theme }: any) => theme.second_color};

      &:after,
      &:before {
        background-color: ${({ theme }: any) => theme.second_color};
      }
    }

    &:before {
      background-color: ${({ theme }: any) => theme.second_color};
    }
  }
`;