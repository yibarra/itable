import React, { FC } from 'react';

import { IRangeSliderLabelMinMax } from './interfaces';

import { TextP } from '../../../../Typography/Text/styles';
import { RangeSliderLabelMinMaxDiv } from './styles';

// range slider label min max
const RangeSliderLabelMinMax: FC<IRangeSliderLabelMinMax> = ({
  max,
  min
}) => {
  // render
  return (
    <RangeSliderLabelMinMaxDiv>
      {(min > 0 && max) && <>
        <TextP className="min">{min}</TextP>
        <TextP className="max">{max}</TextP>
      </>}
    </RangeSliderLabelMinMaxDiv>
  );
};

export default RangeSliderLabelMinMax;