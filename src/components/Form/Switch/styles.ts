import { animated as a } from 'react-spring';
import styled from 'styled-components';

// switch container
export const SwitchContainer = styled(a.div)`
  background-color: ${({ theme }: any) => theme.text_color};
  height: auto;
  padding: 0 7px;
  position: relative;

  .point {
    background-color: ${({ theme }: any) => theme.background_color};
    border-color: ${({ theme }: any) => theme.text_color};
    border-radius: 100%;
    border-style: solid;
    float: left;
    position: relative;
    transform: translate(-50%, 0);
  }
`;