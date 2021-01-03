import React, { FC, useCallback, useContext, useEffect, useState } from 'react';

import FiltersBlock from './FiltersBlock';
import RadioButton from '../Form/RadioButton';

import { TableContext } from '../../providers/TableProvider';
import { FiltersContext } from '../../providers/FiltersProvider';

import { IFilters } from './interfaces';

import { FiltersContainer } from './styles';

// filters
const Filters: FC<IFilters> = () => {
  const { table } = useContext(TableContext);
  const { setFilters } = useContext(FiltersContext);

  // open
  const [ open, setOpen ] = useState<string>('');

  // on change
  const onChange = useCallback((name: string, value: string) =>
    (value === 'on') ? setOpen(name) : setOpen(''), [ setOpen ]);

  // on block
  const onBlock = useCallback((name: string, value: string) => {
    setFilters({ blocks: value === 'on' && name === 'view' });
    onChange(name, value);
  }, [ onChange, setFilters ]);

  // render
  return (
    <FiltersContainer>
      <div className="filters-container">
        <p className="filters-container--title">View</p>

        <div className="filters-container--list">
          <RadioButton
            active={open === 'view'}
            name="view"
            text="Groups"
            onChange={onBlock} />
            
          <RadioButton
            active={open === 'blocks'}
            name="blocks"
            text="Blocks"
            onChange={onChange}/>
        </div>
      </div>

      {open === 'blocks' &&
        <FiltersBlock
          items={table?.groupBlock}
          setFilters={setFilters} />}
    </FiltersContainer>
  );
};

export default Filters;