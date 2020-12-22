import React, { FC, useCallback } from 'react';
import { useSpring, animated as a } from 'react-spring';
import styled from 'styled-components';

// button switch
const ButtonSwitch = styled.div`
  border-radius: 20px;
  height: auto;
  padding: 0 7px;
  position: relative;

  .point {
    border-radius: 100%;
    border-style: solid;
    float: left;
    position: relative;
    transform: translate(-50%, 0);
  }
`;

// switch
const Switch: FC<any> = ({
  border,
  size,
  setValue,
  styles = { background_color: '', text_color: '' },
  value }) => {
  const { background_color, text_color } = styles;
  const [ props, set ] = useSpring(() => ({ left: `0%` }));

  // on switch
  const onSwitch = useCallback((val: boolean) => {
    const value: number = val === true ? 1 : 0;

    set({ left: value === 1 ? `100%` : `0%` });
    setValue(value);
  }, [ set, setValue ]);

  // render
  return (
    <ButtonSwitch
      onClick={() => onSwitch(!value)}
      style={{
        backgroundColor: text_color,
        width: size * 2
      }}>
      <a.div
        className="point"
        style={{
          backgroundColor: background_color,
          borderColor: text_color,
          borderWidth: border,
          height: size,
          width: size,
          ...props 
        }}></a.div>
    </ButtonSwitch>
  );
};

export default Switch;