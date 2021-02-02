import React, { FC } from 'react';

import { IFiltersBlockItem, IFiltersBlockItemElement } from './interfaces';

import { FiltersBlockItemContainer } from './styles';

// filters block item
const FiltersBlockItem: FC<IFiltersBlockItem> = ({ active, item, setItem }) => {
  const { color, name }: IFiltersBlockItemElement = item;
  
  // render
  return (
    <FiltersBlockItemContainer
      data-active={active}
      onClick={() => setItem(item)}>
      <span
        className="block"
        style={{ borderColor: color }}></span>
      <span className="name">{name}</span>
    </FiltersBlockItemContainer>
  );
};

export default FiltersBlockItem;