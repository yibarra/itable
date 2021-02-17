import React, { FC, useCallback } from 'react';
import { useGesture } from 'react-use-gesture';

import { IRangeSliderPoint } from './interfaces';

import { RangeSliderPointerContainer } from './styles';

// range slider point
const RangeSliderPoint: FC<IRangeSliderPoint> = ({ size, setValue, value, width }) => {  
  // on movement
  const onMovement = useCallback(({ down, offset: [x] }: any) => {
    if (down) setValue(x);
  }, [ setValue ]);

  // drag
  const drag = useGesture({
    onDrag: onMovement,
    onDragEnd: onMovement,
  }, {
    drag: {
      bounds: { left: 0, right: width },
      delay: 400,
      threshold: 10,
    }
  });

  // render
  return (
    <RangeSliderPointerContainer {...drag()}
      style={{
        left: value,
        width: size,
        height: size }} />
  );
};

export default RangeSliderPoint;