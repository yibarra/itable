import React, { FC } from 'react';
import styled from 'styled-components';

import { IRangeSliderLine } from './interfaces';

// style
const Line = styled.svg`
  left: 0;
  position: absolute;
  top: 5px;
  width: 100%;
`;

// range slider line
const RangeSliderLine: FC<IRangeSliderLine> = ({ pointWidth, width, value }) => {
  // padding
  const leftMin = (value - (pointWidth + (pointWidth / 1.2)));
  const rightMax = (value + (pointWidth + (pointWidth / 1.2)));

  const letTop = (value - (pointWidth / 1.2));
  const rightTop = (value + (pointWidth / 1.2));

  // render
  return (
    <Line width={width} height={pointWidth + 5}>
      <g transform="translate(0 2)">
        <path
          d={`M0 1 H ${leftMin} V 1 H 0 L 0 2 Z
            M${leftMin} 1C${letTop} 1 ${letTop} ${pointWidth} ${value} ${pointWidth} C${rightTop} ${pointWidth} ${rightTop} 1 ${rightMax} 1 
            M${rightMax} 1 H ${width} V 1 H ${rightMax} L ${rightMax} 0 Z`}
          strokeWidth="3"
          strokeLinecap="round"
          stroke="red"
          fill= "none" />
      </g>
    </Line>
  );
};

export default RangeSliderLine;