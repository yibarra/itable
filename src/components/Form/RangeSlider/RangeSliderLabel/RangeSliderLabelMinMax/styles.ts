import styled from 'styled-components';

// label min
export const RangeSliderLabelMinMaxDiv = styled.div`
  bottom: 20px;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  text-align: center;
  width: 100%;

  .min,
  .max {
    top: -22px;
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