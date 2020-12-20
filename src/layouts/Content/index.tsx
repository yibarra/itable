import React, { FC, useContext, useEffect } from 'react';

import { TableContext } from '../../providers/TableProvider';

// content
const Content: FC<any> = ({ isLoading, value }) => {  
  // context
  const tableContext = useContext<any>(TableContext);
  const { table, setTable } = tableContext;

  // use effect
  useEffect(() => {
    if (!table && isLoading === false) {
      setTable(value);
    }
  }, [ isLoading, setTable, table, value ]);

  // render
  return (
    <div className="">
      content
    </div>
  );
};

export default Content;