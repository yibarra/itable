import React, { FC, useCallback, MouseEvent, useState, useRef } from 'react';
import styled from 'styled-components';
import UseDimension from '../../../uses/UseDimension';
import RangeSliderPoint from './RangeSliderPoint';

import { animated as a } from 'react-spring';
import RangeSliderLine from './RangeSliderLine';

const Range = styled.div`
  float: left;
  position: relative;
  width: 100%;
`;

const RangeSlider: FC<any> = () => {
  const [ value, setValue ] = useState<number>(0);
  const element = useRef<HTMLDivElement | null>(null);

  const { width } = UseDimension(element);

  // render
  return (
    <Range ref={element}>
      <RangeSliderPoint width={width} value={value} setValue={setValue} />
      <RangeSliderLine width={width} value={value} />
    </Range>
  );
};

export default RangeSlider;