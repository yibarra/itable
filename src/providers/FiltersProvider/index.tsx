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
      case 'search':
        if (!filters.search) return false;
        
        return filters.search.toLowerCase() === value.toLowerCase();
      case 'atomicMass':
        return Math.round(filters.atomicMass) >= parseInt(value, 10);
      case 'atomicRadius':
        return filters.atomicRadius >= parseInt(value, 10);
      case 'groupBlock':
        return filters.groupBlock === value;
      case 'radioActive':
        return value === true && filters.radioActive === '';
      case 'yearDiscovered':
        const check = filters.hasOwnProperty('yearDiscovered');
        return check ? parseInt(value, 10) <= filters.yearDiscovered || value === 'Ancient' : false;
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