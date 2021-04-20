import React, { FC, useCallback } from 'react';

import { P } from '../../../Typography/Text/styles';
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
      <P className="atomic-number">{decimalDigit()}</P>
      <P className="symbol">{symbol}</P>
      <P className="name">{name}</P>
    </ElementMinInfoDiv>
  );
};

export default ElementMinInfo;