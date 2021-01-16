import React, { FC, useCallback, useContext, useState } from 'react';

import FiltersBlock from './FiltersBlock';
import RadioButton from '../Form/RadioButton';

import { TableContext } from '../../providers/TableProvider';
import { FiltersContext } from '../../providers/FiltersProvider';

import { IFilters } from './interfaces';

import { FiltersContainer } from './styles';
import RangeSlider from '../Form/RangeSlider';

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

  // on date
  const onDate = useCallback((value: number) =>
    setFilters({ yearDiscovered: value }), [ setFilters ]);

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

          <RangeSlider
            min={1780}
            max={2007}
            label="years"
            size={18}
            callback={(value: number) => onDate(value)} />
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