import { animated as a } from 'react-spring';
import styled from 'styled-components';

// switch container
export const SwitchContainer = styled(a.div)`
  background-color: ${({ theme }: any) => theme.text_color};
  border: none;
  height: auto;
  float: left;
  padding: 3px 8px;
  position: relative;
  width: 32px;

  .point {
    background-color: ${({ theme }: any) => theme.background_color};
    border-radius: 100%;
    float: left;
    height: 10px;
    margin: 0;
    position: relative;
    transform: translate(-50%, 0);
    width: 10px;
  }

  &:before {
    background-color: ${({ theme }: any) => theme.background_color};
    content: '';
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translate(-50%, 0);
    width: 1px;
  }

  &[data-switch="true"] {
    background-color: ${({ theme }: any) => theme.background_color};
  }
`;