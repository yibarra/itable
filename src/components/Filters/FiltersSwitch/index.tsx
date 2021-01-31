import React, { FC } from 'react';

import FiltersBlock from '../FiltersBlock';
import RangeSlider from '../../Form/RangeSlider';

import { IFiltersSwitch } from './interfaces';

import { FiltersSwitchDiv } from './styles';

// filter switch
const FiltersSwitch: FC<IFiltersSwitch> = ({ groupBlock, onSetFilterValue, value }) => {
  // render
  return (
    <FiltersSwitchDiv>
      {(value.blocks || value.blocks === '') &&
        <FiltersBlock
          items={groupBlock}
          onSetFilterValue={onSetFilterValue} />}

      {(value.atomicMass || value.atomicMass === '') && 
        <div
          className="filter-switch--item"
          data-filter="atomicMass">
          <RangeSlider
            min={1}
            max={294}
            label="grams/mole"
            size={18}
            callback={(value: number) => onSetFilterValue('atomicMass', value)} />
        </div>}

      {(value.atomicRadius || value.atomicRadius === '') && 
        <div
          className="filter-switch--item"
          data-filter="atomicRadius">
          <RangeSlider
            min={1}
            max={343}
            label="pm"
            size={18}
            callback={(value: number) => onSetFilterValue('atomicRadius', value)} />
        </div>}

      {(value.yearDiscovered || value.yearDiscovered === '') && 
        <div
          className="filter-switch--item"
          data-filter="yearDiscovered">
          <RangeSlider
            min={1780}
            max={2007}
            label="years"
            size={18}
            callback={(value: number) => onSetFilterValue('yearDiscovered', value)} />
        </div>}
    </FiltersSwitchDiv>
  );
};

export default FiltersSwitch;