import React, { FC } from 'react';

import { ButtonReturnContainer } from './styles';

// button return
const ButtonReturn: FC<any> = ({ callback, text }) => {
  // render
  return (
    <ButtonReturnContainer
      onClick={() => callback(false)}>
      <span className="material-icons">keyboard_return</span>
      <span className="text">{text}</span>
    </ButtonReturnContainer>
  );
};

export default ButtonReturn;