import React, { FC } from 'react';
import styled from 'styled-components';

import { IRangeSliderLine } from './interfaces';

// style
const Line = styled.svg`
  left: 0;
  position: absolute;
  top: 5px;
  width: 100%;

  g {
    path {
      stroke: ${({ theme }) => theme.text_color}
    }
  }
`;

// range slider line
const RangeSliderLine: FC<IRangeSliderLine> = ({ stroke, size, width, value }) => {
  // padding
  const leftMin = (value - (size + (size / 1.2)));
  const rightMax = (value + (size + (size / 1.2)));

  const letTop = (value - (size / 1.2));
  const rightTop = (value + (size / 1.2));

  // render
  return (
    <Line width={width} height={size + 5}>
      <g transform="translate(0 2)">
        <path
          d={`M0 1 H ${leftMin} V 1 H 0 L 0 2 Z
            M${leftMin} 1C${letTop} 1 ${letTop} ${size} ${value} ${size} C${rightTop} ${size} ${rightTop} 1 ${rightMax} 1 
            M${rightMax} 1 H ${width} V 1 H ${rightMax} L ${rightMax} 0 Z`}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill= "none" />
      </g>
    </Line>
  );
};

export default RangeSliderLine;