import React, { FC, useCallback, useContext } from 'react';

import ElementMinInfo from './ElementMinInfo';

import { FiltersContext } from '../../../providers/FiltersProvider';
import { TableContext } from '../../../providers/TableProvider';

import { IElementMin } from './interfaces';

import { ElementMinDiv } from './styles';
import ElementRadius from './ElementRadius';

// element min
const ElementMin: FC<IElementMin> = ({
  element,
  setElement
}) => {
  const { atomicMass, atomicRadius, groupBlock, yearDiscovered } = element;
  const { filters, onSetFilterByKey }: any = useContext(FiltersContext);
  const { getColorGroup }: any = useContext(TableContext);

  // color
  const color = getColorGroup(element);

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
      data-date={onSetFilterByKey('yearDiscovered', yearDiscovered)}
      data-atomic-radius={onSetFilterByKey('atomicRadius', atomicRadius)}
      data-group={onSetFilterByKey('groupBlock', groupBlock)}
      onClick={() => onSelect(element.atomicNumber)}
      style={{
        borderColor: color,
        color: color,
      }}>
        <ElementMinInfo
          color={element.cpkHexColor}
          atomicNumber={element.atomicNumber}
          name={element.name}
          symbol={element.symbol} />

        <span className="bg" style={{ backgroundColor: color }}></span>
        
        <ElementRadius
          atomicRadius={atomicRadius} color={color} />
    </ElementMinDiv>
  );
};

export default ElementMin;