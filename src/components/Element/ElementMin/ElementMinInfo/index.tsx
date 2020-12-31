import React, { FC, useCallback } from 'react';

import { ElementMinInfoContainer } from './styles';

// element min info
const ElementMinInfo: FC<any> = ({ atomicNumber, name, symbol }) => {
  // decimal digit
  const decimalDigit = useCallback(() => {
    if (atomicNumber < 10) {
      return `0${atomicNumber}`;
    }
      
    return atomicNumber;
  }, [ atomicNumber ]);

  // render
  return (
    <ElementMinInfoContainer>
      <span className="atomic-number">{decimalDigit()}</span>
      <span className="symbol">{symbol}</span>
      <span className="name">{name}</span>
    </ElementMinInfoContainer>
  );
};

export default ElementMinInfo;