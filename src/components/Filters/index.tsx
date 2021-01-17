import React, { FC, useCallback, useContext, useState } from 'react';

import FiltersSwitch from './FiltersSwitch';
import RadioButton from '../Form/RadioButton';

import { TableContext } from '../../providers/TableProvider';
import { FiltersContext } from '../../providers/FiltersProvider';

import { IFilters } from './interfaces';

import { FiltersContainer } from './styles';
// import RangeSlider from '../Form/RangeSlider';
import Select from '../Form/Select';

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
            
          <Select
            callback={(value) => setOpen(value.value)}
            optionDefault={{ value: '', name: 'Selected an option' }}
            items={[
              { value: 'atomicMass', name: 'Atomic Mass' },
              { value: 'yearDiscovered', name: 'Year Discovered' }
            ]} />
        </div>
      </div>

      <FiltersSwitch
        groupBlock={table?.groupBlock}
        setFilters={setFilters}
        value={open} />
    </FiltersContainer>
  );
};

export default Filters;

/*


<RadioButton
            active={open === 'blocks'}
            name="blocks"
            text="Blocks"
            onChange={onChange}/>

            */