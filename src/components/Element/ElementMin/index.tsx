import React, { FC, useState } from 'react';

import ElementMinInfo from './ElementMinInfo';

import { IElementMin } from './interfaces';

import { ElementMinContainer } from './styles';

// element min
const ElementMin: FC<IElementMin> = ({
  active,
  atomicNumber,
  cpkHexColor,
  name,
  index,
  symbol,
  empty
}) => {
  // hover
  const [ hover, setHover ] = useState<boolean>(false);

  // render
  return (
    <ElementMinContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-active={active}
      data-empty={empty}
      style={{
        backgroundColor: hover || active ? cpkHexColor : 'transparent',
        borderColor: cpkHexColor,
        height: (index >= 126 && index < 144) ? `${40}px` : `${70}px`,
        color: cpkHexColor
      }}>
      {!empty && <ElementMinInfo
        color={cpkHexColor}
        atomicNumber={atomicNumber}
        name={name}
        symbol={symbol} />}
    </ElementMinContainer>
  );
};

export default ElementMin;