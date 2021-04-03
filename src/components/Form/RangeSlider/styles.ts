import styled from 'styled-components';

// range slider container
export const RangeSliderContainer = styled.div`
  float: left;
  padding: 0 0 20px;
  position: relative;
  width: 100%;

  .slider {
    appearance: none;
    background-color: ${({ theme }) => theme.text_color};
    left: 50%;
    height: 2px;
    opacity: 1;
    outline: none;
    position: absolute;
    pointer-events: auto;
    top: 0;
    transition: opacity .2s;
    transform: translate(-50%, 0);
    width: 100%;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: ${({ theme }) => theme.background_color};
    border: 3px solid ${({ theme }) => theme.text_color};
    border-radius: 100%;
    cursor: pointer;
    height: 16px;
    padding: 0;
    width: 16px;
  }
  
  .slider::-moz-range-thumb {
    background-color: ${({ theme }) => theme.background_color};
    border: 2px solid ${({ theme }) => theme.text_color};
    cursor: pointer;
    height: 16px;
    width: 16px;
  }
`;
