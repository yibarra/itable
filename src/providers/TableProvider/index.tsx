import React, { createContext, FC, useState } from 'react';

import { ITableContext, ITableItem, ITableProvider } from './interfaces';

// table context
const TableContext: any = createContext({} as ITableContext);

// table provider
const TableProvider: FC<ITableProvider> = ({ children }) => {
  // data
  const [ table, setTable ] = useState<ITableItem | null>(null);

  // render
  return (
    <TableContext.Provider value={{
      table,
      setTable
    }}>
      {children}
    </TableContext.Provider>
  );
};

export { TableContext, TableProvider };
export default TableProvider;