import React, { FC } from 'react';

import { IRangeSliderLabel } from './interfaces';

import { TextP } from '../../../Typography/Text/styles';
import { RangeSliderLabelDiv } from './styles';

// range
const RangeSliderLabel: FC<IRangeSliderLabel> = ({
  label,
  size,
  value
}) => {
  // render
  return (
    <RangeSliderLabelDiv style={{ marginTop: size }}>
      <TextP className="value">{value}</TextP>
      <TextP className="label">{label}</TextP>
    </RangeSliderLabelDiv>
  );
};

export default RangeSliderLabel;