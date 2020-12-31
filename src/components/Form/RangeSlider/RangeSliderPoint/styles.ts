import styled from 'styled-components';

// range slider pointer container
export const RangeSliderPointerContainer: any = styled.div`
  background-color: ${({ theme }) => theme.text_color};
  cursor: pointer;
  border-radius: 100%;
  position: absolute;
  transform: translate(-50%, 0);
  z-index: 9;
`;
