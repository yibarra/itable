import React, { FC } from 'react';

import { IButtonReturn } from './interfaces';

import { ButtonReturnContainer } from './styles';

// button return
const ButtonReturn: FC<IButtonReturn> = ({ active, callback, text }) => {
  // render
  return (
    <ButtonReturnContainer
      data-switch={active}
      onClick={() => callback(false)}>
      <span className="material-icons">keyboard_return</span>
      <span className="text">{text}</span>
    </ButtonReturnContainer>
  );
};

export default ButtonReturn;