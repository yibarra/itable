import React, { FC, useCallback, useContext, useMemo } from 'react';

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

  // search
  const radioActiveSearch = useMemo(() =>
    onSetFilterByKey('radioActive', radioactive), [
      onSetFilterByKey,
      radioactive
    ]);
  
  const atomicRadiusSearch = useMemo(() =>
    onSetFilterByKey('atomicRadius', atomicRadius), [
      onSetFilterByKey,
      atomicRadius
    ]);

  // set properties
  const setProperties = useCallback(() => {
    if (filters.length === 0) return {};

    return {
      'data-search': onSetFilterByKey('search', name) || onSetFilterByKey('search', symbol),
      'data-atomic-mass': onSetFilterByKey('atomicMass', atomicMass),
      'data-date': onSetFilterByKey('yearDiscovered', yearDiscovered),
      'data-radius': atomicRadiusSearch,
      'data-radio-active': radioActiveSearch,
      'data-group': onSetFilterByKey('groupBlock', groupBlock)
    }
  },[
    filters,
    onSetFilterByKey,
    atomicMass,
    name,
    yearDiscovered,
    atomicRadiusSearch,
    groupBlock,
    symbol,
    radioActiveSearch
  ]);

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
        
        {atomicRadiusSearch &&
          <ElementRadius atomicRadius={atomicRadius} color={color} />}

        {radioActiveSearch &&
          <ElementRadioActive active={radioactive} color={color} />}
    </ElementMinDiv>
  );
};

export default ElementMin;