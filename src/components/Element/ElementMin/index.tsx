import React, { FC, useCallback, useContext } from 'react';

import ElementMinInfo from './ElementMinInfo';
import ElementRadius from './ElementRadius';

import { FiltersContext } from '../../../providers/FiltersProvider';
import { TableContext } from '../../../providers/TableProvider';

import { IElementMin } from './interfaces';

import { ElementMinDiv } from './styles';
import ElementRadioActive from '../ElementRadioActive';

// element min
const ElementMin: FC<IElementMin> = ({
  element,
  setElement
}) => {
  const {
    atomicMass,
    atomicRadius,
    radioactive,
    groupBlock,
    yearDiscovered,
    name 
  } = element;
  const { filters, onSetFilterByKey }: any = useContext(FiltersContext);
  const { getColorGroup }: any = useContext(TableContext);

  // color
  const color = getColorGroup(element?.groupBlock);

  // set properties
  const setProperties = useCallback(() => {
    return {
      'data-search': onSetFilterByKey('search', name),
      'data-atomic-mass': onSetFilterByKey('atomicMass', atomicMass),
      'data-date': onSetFilterByKey('yearDiscovered', yearDiscovered),
      'data-radius': onSetFilterByKey('atomicRadius', atomicRadius),
      'data-radio-active': onSetFilterByKey('radioActive', radioactive),
      'data-group': onSetFilterByKey('groupBlock', groupBlock)
    }
  }, [ onSetFilterByKey, atomicMass, name, yearDiscovered, atomicRadius, groupBlock, radioactive ]);

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
      {...setProperties()}
      data-filter={Object.keys(filters).length > 0}
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

        <ElementRadioActive
          active={radioactive && onSetFilterByKey('radioActive', radioactive)} color={color} />
    </ElementMinDiv>
  );
};

export default ElementMin;