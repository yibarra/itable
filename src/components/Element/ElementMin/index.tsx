import React, { FC, useCallback, useContext, useState } from 'react';
import { FiltersContext } from '../../../providers/FiltersProvider';

import ElementMinInfo from './ElementMinInfo';

import { IElementMin } from './interfaces';

import { ElementMinContainer } from './styles';

// element min
const ElementMin: FC<IElementMin> = ({
  active,
  element,
  index,
  empty,
  setElement
}) => {
  const { filters }: any = useContext(FiltersContext);
  const [ hover, setHover ] = useState<boolean>(false);

  // on group
  const onGroup = useCallback(() => {
    if (element instanceof Object) {
      return filters.groupBlock === element.groupBlock;
    }

    return false;
  }, [ filters, element ]);

  // on select
  const onSelect = useCallback((atomicNumber: any) => {
    if (Number.isInteger(atomicNumber)) {
      const numb = parseInt(atomicNumber, 10);
      setElement(numb || 0);
    }
  }, [ setElement ]);

  // render
  return (
    <>
      {(element instanceof Object && !empty) ? <ElementMinContainer
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        data-active={active}
        data-group={Object.keys(filters).length > 0 && filters.groupBlock !== ''}
        data-group-item={onGroup()}
        onClick={() => onSelect(element.atomicNumber)}
        style={{
          backgroundColor: hover || active || onGroup() ? element.cpkHexColor : 'transparent',
          borderColor: element.cpkHexColor,
          height: (index >= 126 && index < 144) ? `${40}px` : `${65}px`,
          color: element.cpkHexColor
        }}>
          <ElementMinInfo
            color={element.cpkHexColor}
            atomicNumber={element.atomicNumber}
            name={element.name}
            symbol={element.symbol} />
      </ElementMinContainer> : <ElementMinContainer
        data-empty={empty}
        style={{
          height: (index >= 126 && index < 144) ? `${40}px` : `${65}px`,
        }}></ElementMinContainer>}
    </>
  );
};

export default ElementMin;