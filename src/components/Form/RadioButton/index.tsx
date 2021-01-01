import React, { FC, useRef } from 'react';

import { IRadioButton } from './interfaces';

import { RadioButtonContainer } from './styles';

// radio button
const RadioButton: FC<IRadioButton> = ({ name, text, onChange }) => {
  const element: any = useRef<any>(null);

  // render
  return (
    <RadioButtonContainer>
      <input  
        ref={element}
        type="radio"
        name={name}
        onChange={() => onChange(element.current.value)} />
      <p className="text">{text}</p>
    </RadioButtonContainer>
  );
};

export default RadioButton;