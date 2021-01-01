import React, { FC, useCallback, useContext, useState } from 'react';
import { FiltersContext } from '../../../providers/FiltersProvider';

import ElementMinInfo from './ElementMinInfo';

import { IElementMin } from './interfaces';

import { ElementMinContainer } from './styles';

// element min
const ElementMin: FC<IElementMin> = ({
  active,
  atomicNumber,
  cpkHexColor,
  groupBlock,
  name,
  index,
  symbol,
  empty
}) => {
  const { filters }: any = useContext(FiltersContext);

  // hover
  const [ hover, setHover ] = useState<boolean>(false);

  // on group
  const onGroup = useCallback(() =>
    filters.groupBlock === groupBlock, [ filters, groupBlock ]);

  // render
  return (
    <ElementMinContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-active={active}
      data-group={Object.keys(filters).length > 0 && filters.groupBlock !== ''}
      data-group-item={onGroup()}
      data-empty={empty}
      style={{
        backgroundColor: hover || active || onGroup() ? cpkHexColor : 'transparent',
        borderColor: cpkHexColor,
        height: (index >= 126 && index < 144) ? `${40}px` : `${65}px`,
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