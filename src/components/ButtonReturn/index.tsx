import React, { FC } from 'react';

import { ButtonReturnContainer } from './styles';

// button return
const ButtonReturn: FC<any> = ({ callback, text }) => {
  return (
    <ButtonReturnContainer
      onClick={() => {
        console.log('sipp');
        callback(false);
      }}>
      <span className="material-icons">keyboard_return</span>
      <span>{text}</span>
    </ButtonReturnContainer>
  );
};

export default ButtonReturn;