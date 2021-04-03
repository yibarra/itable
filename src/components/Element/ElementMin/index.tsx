import React, { FC, useCallback, useContext } from 'react';

import ElementMinInfo from './ElementMinInfo';
import ElementRadioActive from '../ElementRadioActive';
import ElementRadius from './ElementRadius';

import { FiltersContext } from '../../../providers/FiltersProvider';
import { TableContext } from '../../../providers/TableProvider';

import { IElementMin } from './interfaces';

import { ElementMinDiv } from './styles';

// element min
const ElementMin: FC<IElementMin> = ({
  element,
  setElement
}) => {
  const {
    atomicNumber,
    atomicMass,
    atomicRadius,
    radioactive,
    groupBlock,
    yearDiscovered,
    cpkHexColor,
    name,
    symbol
  } = element;
  const { filters, onSetFilterByKey }: any = useContext(FiltersContext);
  const { getColorGroup }: any = useContext(TableContext);

  // color
  const color = getColorGroup(element?.groupBlock);

  // set properties
  const setProperties = useCallback(() => {
    return {
      'data-search': onSetFilterByKey('search', name) || onSetFilterByKey('search', symbol),
      'data-atomic-mass': onSetFilterByKey('atomicMass', atomicMass),
      'data-date': onSetFilterByKey('yearDiscovered', yearDiscovered),
      'data-radius': onSetFilterByKey('atomicRadius', atomicRadius),
      'data-radio-active': onSetFilterByKey('radioActive', radioactive),
      'data-group': onSetFilterByKey('groupBlock', groupBlock)
    }
  }, [ onSetFilterByKey, atomicMass, name, yearDiscovered, atomicRadius, groupBlock, symbol, radioactive ]);

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
      onClick={() => onSelect(atomicNumber)}
      style={{
        borderColor: color,
        color: color,
      }}>
        <ElementMinInfo
          color={cpkHexColor}
          atomicNumber={atomicNumber}
          name={name}
          symbol={symbol} />

        <span className="bg" style={{ backgroundColor: color }}></span>
        
        <ElementRadius
          atomicRadius={atomicRadius} color={color} />

        <ElementRadioActive
          active={radioactive && onSetFilterByKey('radioActive', radioactive)}
          color={color} />
    </ElementMinDiv>
  );
};

export default ElementMin;