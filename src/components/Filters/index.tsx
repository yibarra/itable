import React, { FC, useContext } from 'react';

import FiltersBlock from './FiltersBlock';

import { TableContext } from '../../providers/TableProvider';
import { FiltersContext } from '../../providers/FiltersProvider';

import { IFilters } from './interfaces';

import { FiltersContainer } from './styles';

// filters
const Filters: FC<IFilters> = () => {
  const { table } = useContext(TableContext);
  const { setFilters } = useContext(FiltersContext)

  // render
  return (
    <FiltersContainer>
      <FiltersBlock
        items={table?.groupBlock}
        setFilters={setFilters} />
    </FiltersContainer>
  );
};

export default Filters;