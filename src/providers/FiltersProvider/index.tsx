import React, { createContext, FC, useCallback, useState } from 'react';

import { IFilterProvider, IFiltersContext } from './interfaces';

// filter context
const FiltersContext = createContext({} as IFiltersContext);

// filter provider
const FiltersProvider: FC<IFilterProvider> = ({ children }) => {
  const [ filters, setFilters ] = useState<any>({});

  // set filter
  const onSetFilterValue = useCallback((key: string, value: any) => {
    if (key === 'none') {
      setFilters({});
    } else {
      const filter: any = {};
      filter[key] = value;
  
      setFilters({ ...filter });
    }
  }, [ setFilters ]);

  // set filter by key
  const onSetFilterByKey = useCallback((type: string, value: any) => {
    switch (type) {
      case 'atomicMass':
        return Math.round(filters.atomicMass) >= parseInt(value, 10);
      case 'atomicRadius':
        return filters.atomicRadius >= parseInt(value, 10);
      case 'groupBlock':
        return filters.groupBlock === value;
      case 'yearDiscovered':
        return parseInt(value, 10) <= filters.yearDiscovered;
    }
  }, [ filters ]);

  // set filters
  const onSetFilters = useCallback((value: any) => {
    const key = Object.keys(value)[0].toString();

    if (filters[key] !== value[key]) {
      setFilters({ ...filters, ...value });
    } else {
      setFilters({ ...filters, [key]: null });
    }
  }, [ setFilters, filters ]);

  // render
  return (
    <FiltersContext.Provider value={{
      filters,
      onSetFilterByKey,
      onSetFilterValue,
      setFilters: onSetFilters,
    }}>
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersContext, FiltersProvider };
export default FiltersProvider;