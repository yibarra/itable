import React, { FC, useState, useRef, useCallback, memo } from 'react';

import RangeSliderLabel from './RangeSliderLabel';
import RangeSliderLabelMinMax from './RangeSliderLabel/RangeSliderLabelMinMax';

import { IRangeSlider } from './interfaces';

import { RangeSliderContainer } from './styles';

// range slider
const RangeSlider: FC<IRangeSlider> = ({ min, max, label, size, callback }) => {
  // value
  const [ value, setValue ] = useState<number>(0);

  // element
  const element = useRef<HTMLDivElement | null>(null);

  // on change
  const onChange = useCallback((value: any) => {
    if (value !== undefined || isNaN(value) === false) {
      setTimeout(() => callback(value), 400);
      setValue(value);
    }
  }, [ setValue, callback ]);

  // render
  return (
    <RangeSliderContainer ref={element}>
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)} />

      <RangeSliderLabel
        label={label}
        size={size}
        value={value} />

      <RangeSliderLabelMinMax
        min={min}
        max={max} />
    </RangeSliderContainer>
  );
};

export default memo(RangeSlider);