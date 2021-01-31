import React, { FC } from 'react';
import ButtonReturn from '../../../components/ButtonReturn';
import Filters from '../../../components/Filters';
import { IHeaderFilters } from './interfaces';

import { HeaderFiltersDiv } from './styles';

// header filters
const HeaderFilters: FC<IHeaderFilters> = ({ active, color, setElement }) => {
  return (
    <HeaderFiltersDiv
      data-active={active}>
      <Filters />
      <ButtonReturn
        callback={setElement}
        color={color}
        text="Return" />
    </HeaderFiltersDiv>
  );
};

export default HeaderFilters;