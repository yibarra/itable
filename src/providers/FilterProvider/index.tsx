import React, { createContext, FC, useState } from 'react';

import { IFilterProvider } from './interfaces';

// filter context
const FilterContext = createContext({} as any);

// filter provider
const FilterProvider: FC<IFilterProvider> = ({ children }) => {
  const [ filters, setFilters ] = useState<any>({});

  // render
  return (
    <FilterContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
export default FilterProvider;