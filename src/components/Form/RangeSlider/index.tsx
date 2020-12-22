import React, { FC, useState, useRef } from 'react';
import styled from 'styled-components';

import RangeSliderLabel from './RangeSliderLabel';
import RangeSliderPoint from './RangeSliderPoint';
import RangeSliderLine from './RangeSliderLine';
import RangeSliderLabelMinMax from './RangeSliderLabel/RangeSliderLabelMinMax';

import UseDimension from '../../../uses/UseDimension';

// range
const Range = styled.div`
  float: left;
  padding: 0 0 20px;
  position: relative;
  width: 100%;
`;

// range slider
const RangeSlider: FC<any> = ({ min, max, label, pointWidth }) => {
  // value
  const [ value, setValue ] = useState<number>(0);

  // element
  const element = useRef<HTMLDivElement | null>(null);
  const { width } = UseDimension(element);

  // render
  return (
    <Range ref={element}>
      <RangeSliderPoint width={width} value={value} setValue={setValue} pointWidth={pointWidth} />
      <RangeSliderLine width={width} value={value} pointWidth={pointWidth} />
      <RangeSliderLabel value={value} width={width} min={min} max={max} label={label} />
      <RangeSliderLabelMinMax min={min} max={max} />
    </Range>
  );
};

export default RangeSlider;