import React, { FC, useCallback, useState } from 'react';

import FiltersBlockItem from './FiltersBlockItem';

import { IFiltersBlockItemElement } from './FiltersBlockItem/interfaces';
import { IFiltersBlock } from './interfaces';

import { FiltersBlockContainer } from './styles';

// filters block
const FiltersBlock: FC<IFiltersBlock> = ({ items, onSetFilterValue }) => {
  // select
  const [ select, setSelect ] = useState<any>(null);

  // on select
  const onSelect = useCallback((value: IFiltersBlockItemElement) => {
    if (value instanceof Object) {
      let item = '';

      if (value.name) {
        item = value.id; 
      }
      
      if (select !== value) {
        setSelect(value);
      } else {
        setSelect(null);
      }

      onSetFilterValue('groupBlock', item);
    }
  }, [ onSetFilterValue, setSelect, select ]);

  // render
  return (
    <FiltersBlockContainer>
      {items && items.map((item: any, index: number) =>
        <FiltersBlockItem
          item={item}
          active={item === select}
          setItem={onSelect}
          key={index} />)}
    </FiltersBlockContainer>
  );
};

export default FiltersBlock;