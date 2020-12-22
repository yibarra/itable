import React, { FC, useCallback } from 'react';
import styled from 'styled-components';

import { IRangeSliderLabel } from './interfaces';

// label
const Label = styled.p`
  float: left;
  margin: 0;
  padding: 30px 10px 0;
  position: relative;
  text-align: center;
  width: 100%;

  .label,
  .value {
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    font-weight: 400;
  }

  .label {
    margin: 0 0 0 5px;
  }

  .value {
    font-size: 16px;
  }
`;

// range
const RangeSliderLabel: FC<IRangeSliderLabel> = ({ min, max, label, value, width }) => {
  // get value
  const getValue = useCallback((): number => {
    const percent = ((value / width) * 100);

    if (min > 0) {
      return Math.round((((max - min) * percent) / 100) + (min));
    }
    
    return Math.round((max / 100) * percent);
  }, [ width, value, max, min ]);

  // render
  return (
    <Label>
      <span className="value">{getValue().toString()}</span>
      <span className="label">{label}</span>
    </Label>
  );
};

export default RangeSliderLabel;