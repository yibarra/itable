import React, { FC } from 'react';

import Label from '../Label';

import { IInputGroup } from './interfaces';

import { InputGroupContainer } from './styles';

// input group
const InputGroup: FC<IInputGroup> = ({ children, text }) => {
  // render
  return (
    <InputGroupContainer>
      {<Label text={text} />}
      {children}
    </InputGroupContainer>
  );
};

export default InputGroup;