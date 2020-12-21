import React, { FC } from 'react';
import { animated as a } from 'react-spring';
import styled from 'styled-components';

// style
const Line = styled.svg`
  height: 35px;
  position: absolute;
  top: 5px;
`;

// range slider line
const RangeSliderLine: FC<any> = ({ width, value }) => {
  const padding = 25;

  // M2 1 C2 0 -2 1 4 1C11 1 12 12 24 12.5C36 12 36 1 44 1C53 1 47 1 47 1
  // M1.67065 2C8.975 2 9.4967 13 22.0184 13C34.5402 13 34.5402 2 43.4098 2

  //M0 1C10 1 10 17 25 17 C40 17 40 1 50

  // render
  return (
    <Line width={width}>
      <g transform="translate(0 2)">
        <a.path
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