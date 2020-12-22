import React, { FC, useCallback } from 'react';
import { useGesture } from 'react-use-gesture';
import styled from 'styled-components';

// range slider pointer
const RangeSliderPointer: any = styled.div`
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
const RangeSliderPoint: FC<any> = ({ width, setValue, value }) => {
  // on movement
  const onMovement = useCallback(({ down, offset: [x], cancel }: any) => {
    if (down === true) {
      return setValue(x);
    }

    cancel();
  }, [ setValue ]);

  // on movement end
  const onMovementEnd = useCallback(({ offset: [x] }: any) => {
    if (x < 0) {
      setValue(0)
    } else if (x > width) {
      setValue(width - 9);
    } else {
      setValue(x);
    }
  }, [ setValue, width ]);

  // drag
  const drag = useGesture({ 
    onDrag: onMovement,
    onDragEnd: onMovementEnd
  });

  // render
  return (
    <RangeSliderPointer {...drag()} style={{ left: value }} />
  );
};

export default RangeSliderPoint;