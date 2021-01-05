import React, { createContext, FC, useCallback, useState } from 'react';

import { ITableContext, ITableItem, ITableProvider } from './interfaces';

// table context
const TableContext: any = createContext({} as ITableContext);

// table provider
const TableProvider: FC<ITableProvider> = ({ children }) => {
  // data
  const [ table, setTable ] = useState<ITableItem | null>(null);
  const [ element, setElement ] = useState<any>(null);

  // on set element
  const onSetElement = useCallback((atomicNumberSearch: any) => {
    if (!Number.isInteger(atomicNumberSearch)) {
      return setElement(false);
    } else {
      const { elements }: any = table;

      if (table instanceof Object && elements) {
        const filterElement = elements.filter(({ atomicNumber }: any) => 
          atomicNumber === atomicNumberSearch);
        
        if (filterElement.length > 0) {
          setElement(filterElement[0]);
        }
      }
    }
  }, [ table ]);

  // render
  return (
    <TableContext.Provider value={{
      table,
      element,
      setTable,
      setElement: onSetElement
    }}>
      {children}
    </TableContext.Provider>
  );
};

export { TableContext, TableProvider };
export default TableProvider;