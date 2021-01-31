import { animated as a } from 'react-spring';
import styled from 'styled-components';

// switch container
export const SwitchContainer = styled(a.div)`
  background-color: transparent;
  border: none;
  height: auto;
  float: left;
  padding: 3px 8px;
  position: relative;
  width: 32px;

  .point {
    background-color: ${({ theme }: any) => theme.background_color};
    border: 2px solid ${({ theme }: any) => theme.text_color};
    border-radius: 100%;
    float: left;
    height: 15px;
    margin: 0;
    position: relative;
    transform: translate(-50%, 0);
    width: 15px;
  }

  &:before {
    background-color: ${({ theme }: any) => theme.text_color};
    content: '';
    height: 2px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

  &[data-switch="true"] {
    .point {
      background-color: ${({ theme }: any) => theme.text_color};
      border: 2px solid ${({ theme }: any) => theme.background_color};
    }

    &:before {
      background-color: ${({ theme }: any) => theme.background_color};
    }
  }
`;