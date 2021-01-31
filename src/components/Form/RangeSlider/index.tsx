import React, { FC, useState, useRef, useCallback, memo } from 'react';

import RangeSliderLabel from './RangeSliderLabel';
import RangeSliderPoint from './RangeSliderPoint';
import RangeSliderLine from './RangeSliderLine';
import RangeSliderLabelMinMax from './RangeSliderLabel/RangeSliderLabelMinMax';

import UseDimension from '../../../uses/UseDimension';

import { IRangeSlider } from './interfaces';

import { RangeSliderContainer } from './styles';

// range slider
const RangeSlider: FC<IRangeSlider> = ({ min, max, label, size, callback }) => {
  // value
  const [ value, setValue ] = useState<number>(0);

  // element
  const element = useRef<HTMLDivElement | null>(null);
  const { width } = UseDimension(element);

  // get value
  const getValue = useCallback((value: number): number => {
    if (!width) return 0;

    const percent = ((value / width) * 100);

    if (min > 0) {
      return Math.round((((max - min) * percent) / 100) + (min));
    }
    
    return Math.round((max / 100) * percent);
  }, [ width, max, min ]);

  // on change
  const onChange = useCallback((value: any) => {
    if (value !== undefined || isNaN(value) === false) {
      setTimeout(() => callback(getValue(value)), 400);
      setValue(value);
    }
  }, [ setValue, callback, getValue ]);

  // render
  return (
    <RangeSliderContainer ref={element}>
      <RangeSliderPoint
        value={value}
        width={width}
        setValue={onChange}
        size={size} />

      <RangeSliderLine
        value={value}
        width={width}
        stroke={2}
        size={size} />

      <RangeSliderLabel
        label={label}
        size={size}
        value={getValue(value)} />

      <RangeSliderLabelMinMax
        min={min}
        max={max} />
    </RangeSliderContainer>
  );
};

export default memo(RangeSlider);