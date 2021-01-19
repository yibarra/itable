import React, { FC, useCallback, useContext } from 'react';

import ElementMinInfo from './ElementMinInfo';

import { FiltersContext } from '../../../providers/FiltersProvider';

import { IElementMin } from './interfaces';

import { ElementMinDiv } from './styles';

// element min
const ElementMin: FC<IElementMin> = ({
  element,
  setElement
}) => {
  const { atomicMass, groupBlock, yearDiscovered } = element;
  const { filters, onSetFilterByKey }: any = useContext(FiltersContext);

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
      data-filter={Object.keys(filters).length > 0}
      data-atomic-mass={onSetFilterByKey('atomicMass', atomicMass)}
      data-date={onSetFilterByKey('groupBlock', groupBlock)}
      data-group-item={onSetFilterByKey('yearDiscovered', yearDiscovered)}
      onClick={() => onSelect(element.atomicNumber)}
      style={{
        backgroundColor: onSetFilterByKey('groupBlock', groupBlock) ? element.cpkHexColor : 'transparent',
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