import React, { FC, useState, useRef } from 'react';
import styled from 'styled-components';

import RangeSliderLabel from './RangeSliderLabel';
import RangeSliderPoint from './RangeSliderPoint';
import RangeSliderLine from './RangeSliderLine';
import RangeSliderLabelMinMax from './RangeSliderLabel/RangeSliderLabelMinMax';

import UseDimension from '../../../uses/UseDimension';

import { IRangeSlider } from './interfaces';
import { ITheme } from '../../../providers/ThemeProvider/interfaces';

// range
const Range = styled.div`
  float: left;
  padding: 0 0 20px;
  position: relative;
  width: 100%;
`;

// range slider
const RangeSlider: FC<IRangeSlider> = ({ min, max, label, size, styles }) => {
  const { text_color }: ITheme = styles;

  // value
  const [ value, setValue ] = useState<number>(0);

  // element
  const element = useRef<HTMLDivElement | null>(null);
  const { width } = UseDimension(element);

  // render
  return (
    <Range ref={element}>
      <RangeSliderPoint
        fill={text_color}
        value={value}
        width={width}
        setValue={setValue}
        size={size} />

      <RangeSliderLine
        fill={text_color}
        value={value}
        width={width}
        stroke={3}
        size={size} />

      <RangeSliderLabel
        color={text_color}
        label={label}
        min={min}
        max={max}
        size={size}
        width={width}
        value={value} />

      <RangeSliderLabelMinMax
        color={text_color}
        min={min}
        max={max} />
    </Range>
  );
};

export default RangeSlider;