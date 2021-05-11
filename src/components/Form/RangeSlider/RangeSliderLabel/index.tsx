import React, { FC } from 'react';

import { IRangeSliderLabel } from './interfaces';

import { P } from '../../../Typography/Text/styles';
import { RangeSliderLabelDiv } from './styles';

// range
const RangeSliderLabel: FC<IRangeSliderLabel> = ({
  label,
  size,
  value
}) => {
  // render
  return (
    <RangeSliderLabelDiv>
      <P className="value">{value}</P>
      <P className="label">{label}</P>
    </RangeSliderLabelDiv>
  );
};

export default RangeSliderLabel;