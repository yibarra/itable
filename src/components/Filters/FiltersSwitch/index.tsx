import React, { FC, useCallback } from 'react';

import FiltersBlock from '../FiltersBlock';
import RangeSlider from '../../Form/RangeSlider';

import { IFiltersSwitch } from './interfaces';

import { FiltersSwitchDiv } from './styles';

// filter switch
const FiltersSwitch: FC<IFiltersSwitch> = ({ groupBlock, setFilters, value }) => {
  // on atomic mass
  const onAtomicMass = useCallback((value: number) =>
    setFilters({ atomicMass: value }), [ setFilters ]);
  
  // on date
  const onDate = useCallback((value: number) =>
    setFilters({ yearDiscovered: value }), [ setFilters ]);
    
  // render
  return (
    <FiltersSwitchDiv>
      {value === '?' &&
        <FiltersBlock
          items={groupBlock}
          setFilters={setFilters} />}

      {value === 'atomicMass' && 
        <div
          className="filter-switch--item"
          data-filter="atomicMass">
          <RangeSlider
            min={1}
            max={277}
            label="Atomic Mass"
            size={18}
            callback={(value: number) => onAtomicMass(value)} />
        </div>}

      {value === 'yearDiscovered' && 
        <div
          className="filter-switch--item"
          data-filter="yearDiscovered">
          <RangeSlider
            min={1780}
            max={2007}
            label="years"
            size={18}
            callback={(value: number) => onDate(value)} />
        </div>}
    </FiltersSwitchDiv>
  );
};

export default FiltersSwitch;