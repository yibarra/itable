import React, { FC } from 'react';

import Filters from '../../../components/Filters';
import ButtonReturn from '../../../components/ButtonReturn';

import { IHeaderFilters } from './interfaces';

import { HeaderFiltersDiv } from './styles';

// header filters
const HeaderFilters: FC<IHeaderFilters> = ({ active, color, setElement }) => {
  return (
    <HeaderFiltersDiv
      data-switch={active}>
      <div className="filters">
        <Filters />
      </div>

      <div className="return">
        <ButtonReturn
          active={active}
          callback={setElement}
          text="" />
      </div>
    </HeaderFiltersDiv>
  );
};

export default HeaderFilters;