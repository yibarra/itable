import React, { FC, useCallback } from 'react';
import { useGesture } from 'react-use-gesture';
import styled from 'styled-components';

// range slider pointer
const RangeSliderPointer: any = styled.div`
  background: red;
  cursor: pointer;
  border-radius: 100%;
  position: absolute;
  transform: translate(-50%, 0);
  z-index: 9;
`;

// range slider point
const RangeSliderPoint: FC<any> = ({ pointWidth, width, setValue, value, }) => {  
  // on movement
  const onMovement = useCallback(({ down, offset: [x] }: any) => {
    if (down)
      setValue(x);
  }, [ setValue ]);

  // drag
  const drag = useGesture({
    onDrag: onMovement,
    onDragEnd: onMovement,
  }, {
    drag: {
      bounds: { left: 0, right: width },
      delay: 400
    }
  });

  // render
  return (
    <RangeSliderPointer {...drag()} style={{ left: value, width: pointWidth, height: pointWidth }} />
  );
};

export default RangeSliderPoint;