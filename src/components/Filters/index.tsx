import React, { FC, useContext, useState } from 'react';

import FiltersBlock from './FiltersBlock';

import { TableContext } from '../../providers/TableProvider';
import { FiltersContext } from '../../providers/FiltersProvider';

import { IFilters } from './interfaces';

import { FiltersContainer } from './styles';
import RadioButton from '../Form/RadioButton';

// filters
const Filters: FC<IFilters> = () => {
  const { table } = useContext(TableContext);
  const { setFilters } = useContext(FiltersContext);

  const [ open, setOpen ] = useState<string>('');

  // render
  return (
    <FiltersContainer>
      <div className="filters-container">
        <p className="filters-container--title">View</p>

        <div className="filters-container--list">
          <RadioButton
            name="view"
            text="Groups"
            onChange={(value: string) => setOpen(value)} />
            
          <RadioButton
            name="view"
            text="Blocks"
            onChange={(value: string) => setOpen(value)} />
        </div>
      </div>

      <FiltersBlock
        items={table?.groupBlock}
        setFilters={setFilters} />
    </FiltersContainer>
  );
};

export default Filters;