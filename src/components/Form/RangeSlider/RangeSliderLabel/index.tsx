import React, { FC, useCallback } from 'react';
import styled from 'styled-components';

import { IRangeSliderLabel } from './interfaces';

// label
const Label = styled.p`
  float: left;
  margin: 0;
  padding: 20px 10px 0;
  position: relative;
  text-align: center;
  width: 100%;

  .label,
  .value {
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    font-weight: 400;
    line-height: 1em;
  }

  .label {
    margin: 3px 0 0 5px;
  }

  .value {
    font-size: 16px;
  }
`;

// range
const RangeSliderLabel: FC<IRangeSliderLabel> = ({ color, min, max, label, size, value, width }) => {
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
    <Label style={{ marginTop: size }}>
      <span className="value" style={{ color }}>{getValue().toString()}</span>
      <span className="label" style={{ color }}>{label}</span>
    </Label>
  );
};

export default RangeSliderLabel;