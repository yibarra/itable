import React, { FC, useCallback, useState } from 'react';

import FiltersBlockItem from './FiltersBlockItem';
import FiltersBlockItemDescription from './FiltersBlockItemDescription';

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
      
      if (select !== value) {
        setSelect(value);
      } else {
        setSelect(null);
      }

      setFilters(item);
    }
  }, [ setFilters, setSelect, select ]);

  // render
  return (
    <FiltersBlockContainer>
      {items && items.map((item: any, index: number) =>
        <FiltersBlockItem
          item={item}
          active={item === select}
          setItem={onSelect}
          key={index} />)}

      <FiltersBlockItemDescription
        active={select !== null}
        item={select} />
    </FiltersBlockContainer>
  );
};

export default FiltersBlock;