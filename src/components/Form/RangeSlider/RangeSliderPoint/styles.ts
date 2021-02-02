import styled from 'styled-components';

// range slider pointer container
export const RangeSliderPointerContainer: any = styled.div`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.text_color};
  border-radius: 100%;
  pointer-events: auto;
  position: absolute;
  transform: translate(-50%, 0);
  z-index: 9;

  &:before {
    background-color: ${({ theme }) => theme.text_color};
    border-radius: 100%;
    content: '';
    height: 8px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all var(--animation-time) var(--animation-bezier);
    width: 8px;
  }

  &:hover {
    &:before {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;
