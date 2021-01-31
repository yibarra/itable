import React, { FC, useCallback, useContext } from 'react';

import ElementMinInfo from './ElementMinInfo';

import { FiltersContext } from '../../../providers/FiltersProvider';
import { TableContext } from '../../../providers/TableProvider';

import { IElementMin } from './interfaces';

import { ElementMinDiv } from './styles';

// element min
const ElementMin: FC<IElementMin> = ({
  element,
  setElement
}) => {
  const { atomicMass, atomicRadius, groupBlock, yearDiscovered } = element;
  const { filters, onSetFilterByKey }: any = useContext(FiltersContext);
  const { getColorGroup }: any = useContext(TableContext);

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
        borderColor: getColorGroup(element),
        color: getColorGroup(element),
      }}>
        <ElementMinInfo
          color={element.cpkHexColor}
          atomicNumber={element.atomicNumber}
          name={element.name}
          symbol={element.symbol} />

        <span className="bg" style={{ 
          backgroundColor: getColorGroup(element) 
        }}></span>
        
        <span className="radius" style={{
          backgroundColor: getColorGroup(element),
          height: Math.round((element.atomicRadius / 30) * Math.PI * 1.5),
          width: Math.round((element.atomicRadius / 30) * Math.PI * 1.5)
        }}></span>
    </ElementMinDiv>
  );
};

export default ElementMin;