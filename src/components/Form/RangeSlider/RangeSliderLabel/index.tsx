import React, { FC, useCallback } from 'react';

import { IRangeSliderLabel } from './interfaces';

import { RangeSliderLabelContainer } from './styles';

// range
const RangeSliderLabel: FC<IRangeSliderLabel> = ({ min, max, label, size, value, width }) => {
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
    <RangeSliderLabelContainer style={{ marginTop: size }}>
      <span className="value">{getValue().toString()}</span>
      <span className="label">{label}</span>
    </RangeSliderLabelContainer>
  );
};

export default RangeSliderLabel;