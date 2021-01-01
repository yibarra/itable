import React, { FC } from 'react';

import { IFiltersBlockItemDescription } from './interfaces';

import { FiltersBlockItemDescriptionContainer } from './styles';

// filters block item description
const FiltersBlockItemDescription: FC<IFiltersBlockItemDescription> = ({ active, item }) => {
  // render
  return (
    <FiltersBlockItemDescriptionContainer
      data-active={active}>
      {item && 
        <p className="text">{item.description}</p>}
    </FiltersBlockItemDescriptionContainer>
  );
};

export default FiltersBlockItemDescription;