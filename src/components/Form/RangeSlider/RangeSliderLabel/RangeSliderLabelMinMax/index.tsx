import React, { FC } from 'react';
import styled from 'styled-components';

import { IRangeSliderLabelMinMax } from './interfaces';

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

const RangeSliderLabelMinMax: FC<IRangeSliderLabelMinMax> = ({ color, max, min }) => {
  // render
  return (
    <LabelMinMax>
      {(min > 0 && max) && <>
        <span className="min" style={{ color }}>{min}</span>
        <span className="max" style={{ color }}>{max}</span>
      </>}
    </LabelMinMax>
  );
};

export default RangeSliderLabelMinMax;