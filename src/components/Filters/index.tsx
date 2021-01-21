import React, { FC, useContext } from 'react';

import FiltersSwitch from './FiltersSwitch';
//import RadioButton from '../Form/RadioButton';
import Select from '../Form/Select';

import { TableContext } from '../../providers/TableProvider';
import { FiltersContext } from '../../providers/FiltersProvider';

import { IFilters } from './interfaces';

import { FiltersContainer } from './styles';

// filters
const Filters: FC<IFilters> = () => {
  const { table } = useContext(TableContext);
  const { filters, onSetFilterValue } = useContext(FiltersContext);

  // render
  return (
    <FiltersContainer>
      <div className="filters-container">
        <p className="filters-container--title">View</p>

        <div className="filters-container--list">
          <Select
            callback={(value: any) => onSetFilterValue(value.value, '')}
            optionDefault={{ value: '', name: 'Selected an option' }}
            items={[
              { value: 'atomicMass', name: 'Atomic Mass' },
              { value: 'atomicRadius', name: 'Atomic Radius '},
              { value: 'yearDiscovered', name: 'Year Discovered' }
            ]} />
        </div>
      </div>

      <FiltersSwitch
        groupBlock={table?.groupBlock}
        onSetFilterValue={onSetFilterValue}
        value={filters} />
    </FiltersContainer>
  );
};

export default Filters;

/*
<RadioButton
            active={filters.groups === true}
            name="view"
            text="Groups"
            onChange={(value: any) => onSetFilterValue('groups', value)} />

          <RadioButton
            active={filters.blocks && filters.blocks !== ''}
            name="view"
            text="Blocks"
            onChange={(value: any) => onSetFilterValue('blocks', value)} />

          <RadioButton
            active={filters.states && filters.states !== ''}
            name="view"
            text="States"
            onChange={(value: any) => onSetFilterValue('states', value)} />
            */