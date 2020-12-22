import React, { FC } from 'react';
import styled from 'styled-components';

// label min
const LabelMinMax = styled.p`
  bottom: 20px;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  text-align: center;
  width: 100%;

  .min,
  .max {
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    font-weight: 400;
  }

  .min,
  .max {
    bottom: 0;
    position: absolute;
  }

  .min {
    left: 0;
  }

  .max {
    right: 0;
  }
`;

const RangeSliderLabelMinMax: FC<any> = ({ max, min }) => {
  // render
  return (
    <LabelMinMax>
      {(min > 0 && max) && <>
        <span className="min">{min}</span>
        <span className="max">{max}</span>
      </>}
    </LabelMinMax>
  );
};

export default RangeSliderLabelMinMax;