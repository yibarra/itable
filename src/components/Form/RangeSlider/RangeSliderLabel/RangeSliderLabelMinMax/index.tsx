import React, { FC } from 'react';

import { IRangeSliderLabelMinMax } from './interfaces';

import { P } from '../../../../Typography/Text/styles';
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
        <P className="min">{min}</P>
        <P className="max">{max}</P>
      </>}
    </RangeSliderLabelMinMaxDiv>
  );
};

export default RangeSliderLabelMinMax;