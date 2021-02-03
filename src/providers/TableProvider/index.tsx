import React, { createContext, FC, useCallback, useState } from 'react';

import { ITableContext, ITableItem, ITableProvider } from './interfaces';

// table context
const TableContext: any = createContext({} as ITableContext);

// table provider
const TableProvider: FC<ITableProvider> = ({ children }) => {
  // data
  const [ table, setTable ] = useState<ITableItem | null>(null);
  const [ element, setElement ] = useState<any>(null);

  // get element
  const getColorGroup = useCallback((group: any) => {
    if (!group) return false;

    const { groupBlock }: any = table;

    if(Array.isArray(groupBlock) && groupBlock.length > 0) {
      const block = groupBlock.filter(({ id }: any) => id === group)[0];
      return block instanceof Object ? block.color : '';
    }

    return '';
  }, [ table ]);

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
          setElement({ ...filterElement[0], color: getColorGroup(filterElement[0]?.groupBlock) });
        }
      }
    }
  }, [ table, getColorGroup ]);

  // render
  return (
    <TableContext.Provider value={{
      getColorGroup,
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