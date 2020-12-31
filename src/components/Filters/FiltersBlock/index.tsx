import React, { FC, useCallback, useState } from 'react';

import FiltersBlockItem from './FiltersBlockItem';
import { IFiltersBlockItemElement } from './FiltersBlockItem/interfaces';

import { IFiltersBlock } from './interfaces';

import { FiltersBlockContainer } from './styles';

// filters block
const FiltersBlock: FC<IFiltersBlock> = ({ items, setFilters }) => {
  // select
  const [ select, setSelect ] = useState<any>(null);

  // on select
  const onSelect = useCallback((value: IFiltersBlockItemElement) => {
    if (value instanceof Object) {
      let item = { groupBlock: '' };

      if (value.name && value.name.toLowerCase() !== 'all') {
        item = { groupBlock: value.id }; 
      }
      
      setSelect(value);
      setFilters(item);
    }
  }, [ setFilters, setSelect ]);

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