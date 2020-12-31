import React, { FC, useCallback } from 'react';
import { useSpring, animated as a } from 'react-spring';

import { ISwitch } from './interfaces';

import { SwitchContainer } from './styles';

// switch
const Switch: FC<ISwitch> = ({
  size,
  setValue,
  value
}) => {
  const [ props, set ] = useSpring(() => ({ left: `0%` }));

  // on switch
  const onSwitch = useCallback((val: boolean) => {
    set({ left: !val ? `100%` : `0%` });
    setValue(val);
  }, [ set, setValue ]);

  // render
  return (
    <SwitchContainer
      onClick={() => onSwitch(!value)}
      style={{
        borderRadius: size,
        width: size * 2
      }}>
      <a.div
        className="point"
        style={{
          height: size,
          width: size,
          ...props 
        }}></a.div>
    </SwitchContainer>
  );
};

export default Switch;