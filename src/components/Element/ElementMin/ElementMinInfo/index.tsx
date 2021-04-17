import React, { FC, useCallback } from 'react';

import { TextP } from '../../../Typography/Text/styles';
import { ElementMinInfoDiv } from './styles';

// element min info
const ElementMinInfo: FC<any> = ({
  atomicNumber,
  name,
  symbol
}) => {
  // decimal digit
  const decimalDigit = useCallback(() =>
    atomicNumber < 10 ? `0${atomicNumber}` : atomicNumber, [ atomicNumber ]);

  // render
  return (
    <ElementMinInfoDiv>
      <TextP className="atomic-number">{decimalDigit()}</TextP>
      <TextP className="symbol">{symbol}</TextP>
      <TextP className="name">{name}</TextP>
    </ElementMinInfoDiv>
  );
};

export default ElementMinInfo;