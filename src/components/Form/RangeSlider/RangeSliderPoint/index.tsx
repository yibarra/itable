import React, { FC } from 'react';
import { animated as a, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import styled from 'styled-components';

// range slider pointer
const RangeSliderPointer: any = styled(a.div)`
  background: red;
  cursor: pointer;
  border-radius: 100%;
  height: 18px;
  position: absolute;
  transform: translate(-50%, 0);
  width: 18px;
  z-index: 9;
`;

// range slider point
const RangeSliderPoint: FC<any> = ({ value, width, setValue }) => {
  // props
  const [{ x }, set] = useSpring(() => ({ x: value }));

  // drag
  const drag = useDrag(({ down, offset: [x], cancel }) => {
    if (down === true) {
      setValue(x);
      set({ x });
    } else {
      return cancel();
    }
  }, {
    bounds: { left: 0, right: width },
    delay: 0
  });

  // render
  return (
    <RangeSliderPointer {...drag()} style={{ left: x }} />
  );
};

export default RangeSliderPoint;