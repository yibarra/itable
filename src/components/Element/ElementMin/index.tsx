import React, { FC, useCallback, useContext } from 'react';

import ElementMinInfo from './ElementMinInfo';

import { FiltersContext } from '../../../providers/FiltersProvider';

import { IElementMin } from './interfaces';

import { ElementMinDiv } from './styles';

// element min
const ElementMin: FC<IElementMin> = ({
  active,
  element,
  setElement
}) => {
  const { filters }: any = useContext(FiltersContext);

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
    <ElementMinDiv
      data-active={active}
      data-group={Object.keys(filters).length > 0 && filters.groupBlock !== ''}
      data-group-item={onGroup()}
      onClick={() => onSelect(element.atomicNumber)}
      style={{
        backgroundColor: onGroup() ? element.cpkHexColor : 'transparent',
        borderColor: element.cpkHexColor,
        color: element.cpkHexColor,
      }}>
        <ElementMinInfo
          color={element.cpkHexColor}
          atomicNumber={element.atomicNumber}
          name={element.name}
          symbol={element.symbol} />

        <span className="bg" style={{ backgroundColor: element.cpkHexColor }}></span>
    </ElementMinDiv>
  );
};

export default ElementMin;