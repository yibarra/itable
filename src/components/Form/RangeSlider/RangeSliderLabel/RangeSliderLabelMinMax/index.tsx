import React, { FC } from 'react';

import { IRangeSliderLabelMinMax } from './interfaces';

import { RangeSliderLabelMinMaxContainer } from './styles';

// range slider label min max
const RangeSliderLabelMinMax: FC<IRangeSliderLabelMinMax> = ({ max, min }) => {
  // render
  return (
    <RangeSliderLabelMinMaxContainer>
      {(min > 0 && max) && <>
        <span className="min">{min}</span>
        <span className="max">{max}</span>
      </>}
    </RangeSliderLabelMinMaxContainer>
  );
};

export default RangeSliderLabelMinMax;