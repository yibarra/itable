import React, { FC, useState, useRef } from 'react';

import RangeSliderLabel from './RangeSliderLabel';
import RangeSliderPoint from './RangeSliderPoint';
import RangeSliderLine from './RangeSliderLine';
import RangeSliderLabelMinMax from './RangeSliderLabel/RangeSliderLabelMinMax';

import UseDimension from '../../../uses/UseDimension';

import { IRangeSlider } from './interfaces';

import { RangeSliderContainer } from './styles';

// range slider
const RangeSlider: FC<IRangeSlider> = ({ min, max, label, size }) => {
  // value
  const [ value, setValue ] = useState<number>(0);

  // element
  const element = useRef<HTMLDivElement | null>(null);
  const { width } = UseDimension(element);

  // render
  return (
    <RangeSliderContainer ref={element}>
      <RangeSliderPoint
        value={value}
        width={width}
        setValue={setValue}
        size={size} />

      <RangeSliderLine
        value={value}
        width={width}
        stroke={3}
        size={size} />

      <RangeSliderLabel
        label={label}
        min={min}
        max={max}
        size={size}
        width={width}
        value={value} />

      <RangeSliderLabelMinMax
        min={min}
        max={max} />
    </RangeSliderContainer>
  );
};

export default RangeSlider;