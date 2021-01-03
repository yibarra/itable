import React, { FC, useCallback, useRef } from 'react';

import { IRadioButton } from './interfaces';

import { RadioButtonContainer } from './styles';

// radio button
const RadioButton: FC<IRadioButton> = ({ active, name, text, onChange }) => {
  const element: any = useRef<any>(null);

  // on change
  const onHandler = useCallback(() => {
    if (element.current) {
      onChange(name, element.current?.value);
    }
  }, [ onChange, name ]);

  // render
  return (
    <RadioButtonContainer
      data-active={active}>
      <input  
        ref={element}
        type="radio"
        name={name}
        checked={active}
        onChange={() => onHandler()} />
      <p className="text">{text}</p>
    </RadioButtonContainer>
  );
};

export default RadioButton;