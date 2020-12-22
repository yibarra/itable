import React, { FC } from 'react';
import styled from 'styled-components';

// style
const Line = styled.svg`
  height: 35px;
  left: 0;
  position: absolute;
  top: 5px;
  width: 100%;
`;

// range slider line
const RangeSliderLine: FC<any> = ({ width, value }) => {
  // padding
  const padding = 25;

  // render
  return (
    <Line width={width}>
      <g transform="translate(0 2)">
        <path
          d={`M0 1 H ${value - padding} V 1 H 0 L 0 2 Z
            M${value - 25} 1C${value - 15} 1 ${value - 15} 18 ${value} 18 C${value + 15} 18 ${value + 15} 1 ${value + 25} 1 
            M${value + padding} 1 H ${width} V 1 H ${value + padding} L ${value + padding} 0 Z`}
          strokeWidth="3"
          strokeLinecap="round"
          stroke="red"
          fill= "none" />
      </g>
    </Line>
  );
};

export default RangeSliderLine;