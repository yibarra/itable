import React, { FC, useCallback } from 'react';
import { useSpring, animated as a } from 'react-spring';

import { ISwitch } from './interfaces';

import { SwitchContainer } from './styles';

// switch
const Switch: FC<ISwitch> = ({
  color,
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
      data-switch={color ? true : false}
      onClick={() => onSwitch(!value)}>
      <a.div
        className="point"
        style={{
          backgroundColor: color,
          ...props 
        }}></a.div>
    </SwitchContainer>
  );
};

export default Switch;