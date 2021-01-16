import React, { FC } from 'react';

import { IRangeSliderLabel } from './interfaces';

import { RangeSliderLabelContainer } from './styles';

// range
const RangeSliderLabel: FC<IRangeSliderLabel> = ({ label, size, value }) => {
  // render
  return (
    <RangeSliderLabelContainer style={{ marginTop: size }}>
      <span className="value">{value}</span>
      <span className="label">{label}</span>
    </RangeSliderLabelContainer>
  );
};

export default RangeSliderLabel;