import React, { FC, useCallback } from 'react';

import { IRangeSliderLine } from './interfaces';

import { Line } from './styles';

// range slider line
const RangeSliderLine: FC<IRangeSliderLine> = ({ stroke, size, width, value, setValue }) => {
  // padding
  const leftMin = Math.floor(value - (size / 2));
  const rightMax = Math.floor(value + (size / 2));

  // set value percent
  const setValuePercent = useCallback(({ clientX, target }: any) => {
    const element = target.getBoundingClientRect();

    if (element)
      setValue((clientX - element.left));
  }, [ setValue ]);

  // render
  return (
    <Line width={width} height={size + 5}>
      <g transform="translate(0 2)">
        <path
          d={`M0 1 H ${leftMin} V 1 H 0 L 0 1 Z
            M${rightMax} 1 H ${width} V 1 H ${rightMax} L ${rightMax} 0 Z`}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill= "none"
          onClick={(e: any) => setValuePercent(e)} />
      </g>
    </Line>
  );
};

export default RangeSliderLine;