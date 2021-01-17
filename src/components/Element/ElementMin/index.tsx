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
  const { filters }: any = useContext(FiltersContext);

  // on atomic mass
  const onAtomicMass = useCallback(() =>
    (element instanceof Object) ? filters.atomicMass >= element.atomicMass : false,
    [ filters, element ]);

  // on group
  const onGroup = useCallback(() =>
    (element instanceof Object) ? filters.groupBlock === element.groupBlock : false,
    [ filters, element ]);

  // on date
  const onYearDiscovered = useCallback(() =>
    (element instanceof Object) ? filters.yearDiscovered >= element.yearDiscovered : false,
    [ filters, element ]);

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
      data-atomic-mass={onAtomicMass()}
      data-date={onYearDiscovered()}
      data-group-item={`-${onGroup()}`}
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