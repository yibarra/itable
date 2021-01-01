import React, { createContext, FC, useCallback, useState } from 'react';

import { IFilterProvider, IFiltersContext } from './interfaces';

// filter context
const FiltersContext = createContext({} as IFiltersContext);

// filter provider
const FiltersProvider: FC<IFilterProvider> = ({ children }) => {
  const [ filters, setFilters ] = useState<any>({});

  // set filters
  const onSetFilters = useCallback((value: any) => {
    const key = Object.keys(value)[0].toString();

    if (filters[key] !== value[key]) {
      setFilters({ ...filters, ...value });
    } else {
      setFilters({ ...filters, [key]: '' });
    }
  }, [ setFilters, filters ]);

  // render
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters: onSetFilters,
    }}>
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersContext, FiltersProvider };
export default FiltersProvider;