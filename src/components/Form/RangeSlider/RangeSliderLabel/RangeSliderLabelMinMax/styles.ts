import styled from 'styled-components';

// label min
export const RangeSliderLabelMinMaxContainer = styled.p`
  bottom: 20px;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  text-align: center;
  width: 100%;

  .min,
  .max {
    font-size: 12px;
    letter-spacing: -0.04em;
    font-weight: 400;
  }

  .min,
  .max {
    bottom: 0;
    color: ${({ theme }: any) => theme.text_color};
    position: absolute;
  }

  .min {
    left: 0;
  }

  .max {
    right: 0;
  }
`;